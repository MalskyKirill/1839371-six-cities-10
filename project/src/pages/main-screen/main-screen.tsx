
import {loadFavoriteOffersAction} from '../../store/api-actions';
import ListCities from '../../components/list-city/list-city';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {useState, useEffect} from 'react';
import {DROPDOWN_OPNION, AuthorizationStatus} from '../../consts';
import MainNoEmpty from '../../components/main-no-empty/main-no-empty';
import MainEmpty from '../../components/main-empty/main-empty';


type MainScreenProps = {
  cities: string[];
  hoveredId: any,
  setHoveredId: any,
}

const isLoggedIn = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Auth;

function MainScreen ({ cities, hoveredId, setHoveredId }: MainScreenProps): JSX.Element {
  const selectedOffers = useAppSelector((state) => state.offers.filter((offer: { city: { name: string; }; }) => state.city === offer.city.name));
  const selectedCity = useAppSelector((state) => state.city);
  const {authorizationStatus } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoggedIn(authorizationStatus)) {
      dispatch(loadFavoriteOffersAction());
    }
  }, [dispatch, authorizationStatus]);

  const [sortType, setSortType] = useState(DROPDOWN_OPNION[0]);

  return (
    <main className={`page__main page__main--index ${(selectedOffers && selectedOffers.length > 0) ? '' : 'page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <ListCities cities={cities}/>
      </div>
      <div className="cities">
        {((selectedOffers && selectedOffers.length > 0) ?
          <MainNoEmpty setHoveredId={setHoveredId} hoveredId={hoveredId} selectedCity={selectedCity} sortType={sortType} setSortType={setSortType} selectedOffers={selectedOffers}/>
          : <MainEmpty/>)}

      </div>
    </main>
  );
}

export default MainScreen;
