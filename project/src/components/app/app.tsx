import {Route, Routes} from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Layout from '../layout/layout';
import { AppRoute, AuthorizationStatus } from '../../consts';
import PrivateRoute from '../private-route/private-route';
// import { Offer } from '../../types/offer';
// import { Review } from '../../types/review';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import {useState} from 'react';

type AppScreenProps = {
  cities: string[];
}

function App({cities}: AppScreenProps): JSX.Element {

  const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
    authorizationStatus === AuthorizationStatus.Unknown;

  const {authorizationStatus, isDataLoader, offers } = useAppSelector((state) => state);
  const [hoveredId, setHoveredId] = useState(0);
  if (isCheckedAuth(authorizationStatus) || isDataLoader) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainScreen cities={cities} hoveredId={hoveredId} setHoveredId={setHoveredId}/>} />
          <Route path={AppRoute.Room} element={<RoomScreen hoveredId={hoveredId} setHoveredId={setHoveredId}/>} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen offers={offers}/>
            </PrivateRoute>
          }
          />
        </Route>
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
