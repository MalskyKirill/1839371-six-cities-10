import ListFavoriteOfferHotel from '../../components/list-favorite-offer-hotel/list-favorite-offer-hotel';
import { Offer } from '../../types/offer';

type FavoritesScreenProps ={
  offers: Offer[];
}

function FavoritesScreen ({offers}: FavoritesScreenProps): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <ListFavoriteOfferHotel offers={offers}/>
      </ul>
    </section>
  );
}

export default FavoritesScreen;
