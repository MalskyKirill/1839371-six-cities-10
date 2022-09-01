import ListFavoriteOfferHotel from '../../components/list-favorite-offer-hotel/list-favorite-offer-hotel';
import { useAppSelector } from '../../hooks';


function FavoritesScreen (): JSX.Element {

  const favoriteOffers = useAppSelector((state) => state.favorites);

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
