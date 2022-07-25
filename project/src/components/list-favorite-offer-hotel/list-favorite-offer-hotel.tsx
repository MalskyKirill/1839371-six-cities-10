import FavoriteHotelCard from '../favorite-hotel-card/favorite-hotel-card';
import { Offer } from '../../types/offer';
import React from 'react';

type ListFavoriteOfferHotelProps = {
  offers: Offer[];
}

function ListFavoriteOfferHotel (props: ListFavoriteOfferHotelProps) {
  // console.log(props)

  const {offers} = props;
  return(
    <React.Fragment>
      {offers.map((offer: Offer) => <FavoriteHotelCard key={offer.id} offer={offer} />)}
    </React.Fragment>
  );
}

export default ListFavoriteOfferHotel;
