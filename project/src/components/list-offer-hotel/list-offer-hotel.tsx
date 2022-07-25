import HotelCard from '../hotel-card/hotel-card';
import { Offer } from '../../types/offer';
import React from 'react';

type ListOfferHotelProps = {
  offers: Offer[];
}

function ListOfferHotel (props: ListOfferHotelProps) {

  const {offers} = props;
  return(
    <React.Fragment>
      {offers.map((offer: Offer) => <HotelCard key={offer.id} offer={offer} cardType="city" />)}
    </React.Fragment>
  );
}

export default ListOfferHotel;
