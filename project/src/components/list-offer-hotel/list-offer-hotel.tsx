import HotelCard from '../hotel-card/hotel-card';
import { Offer } from '../../types/offer';
import React from 'react';

type ListOfferHotelProps = {
  offers: Offer[];
  cardType: 'city' | 'near';
}

function ListOfferHotel (props: ListOfferHotelProps) {

  const {offers, cardType} = props;
  return(
    <React.Fragment>
      {offers.map((offer: Offer) => <HotelCard key={offer.id} offer={offer} cardType={cardType} />)}
    </React.Fragment>
  );
}

export default ListOfferHotel;
