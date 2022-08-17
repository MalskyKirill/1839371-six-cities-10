import HotelCard from '../hotel-card/hotel-card';
import { Offer } from '../../types/offer';
import React from 'react';
import {SORT_HOTEL_TYPE} from '../../consts';
import {sortHotelByPriseToHigh, sortHotelByPriseToLow, sortHotelByRating} from '../../utils';

type ListOfferHotelProps = {
  offers: Offer[];
  cardType: 'city' | 'near';
  sortType?: any;
  setHoveredId?: any;
}


function ListOfferHotel (props: ListOfferHotelProps) {

  const {offers, cardType, sortType, setHoveredId} = props;

  const handleSortTypeChange = (offers, sortType) => {
    switch (sortType?.value) {
      case SORT_HOTEL_TYPE.DEFAULT:
        return offers;
      case SORT_HOTEL_TYPE.SORT_HOTEL_BY_RATING:
        return offers.sort(sortHotelByRating);
      case SORT_HOTEL_TYPE.SORT_HOTEL_BY_PRISE_TO_HIGH:
        return offers.sort(sortHotelByPriseToHigh);
      case SORT_HOTEL_TYPE.SORT_HOTEL_BY_PRISE_TO_LOW:
        return offers.sort(sortHotelByPriseToLow);
      default:
        return offers;
    }
  };

  const newSortOffers = handleSortTypeChange(offers, sortType);

  return(
    <React.Fragment>
      {newSortOffers.map((offer: Offer) => (<HotelCard
        onHover={setHoveredId}
        key={offer.id} offer={offer} cardType={cardType} />))}
    </React.Fragment>
  );
}

export default ListOfferHotel;
