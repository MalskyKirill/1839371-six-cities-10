import ListFavoriteOfferHotel from '../../components/list-favorite-offer-hotel/list-favorite-offer-hotel';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {useEffect} from 'react';
import {loadFavoriteOffersAction} from '../../store/api-actions';


function FavoritesScreen (): JSX.Element {

  const favoriteOffers = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFavoriteOffersAction());
  }, [dispatch]);


  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <ListFavoriteOfferHotel favoriteOffers={favoriteOffers}/>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
