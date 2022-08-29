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

  const handleSortTypeChange = (offer: any[], sortT: { value: any; }) => {
    switch (sortT?.value) {
      case SORT_HOTEL_TYPE.DEFAULT:
        return offer;
      case SORT_HOTEL_TYPE.SORT_HOTEL_BY_RATING:
        return offer.sort(sortHotelByRating);
      case SORT_HOTEL_TYPE.SORT_HOTEL_BY_PRISE_TO_HIGH:
        return offer.sort(sortHotelByPriseToHigh);
      case SORT_HOTEL_TYPE.SORT_HOTEL_BY_PRISE_TO_LOW:
        return offer.sort(sortHotelByPriseToLow);
      default:
        return offer;
    }
  };

  const newSortOffers = handleSortTypeChange(offers, sortType);

  return(
    <div className="cities__places-list places__list tabs__content">
      {newSortOffers.map((offer: Offer) => (<HotelCard
        onHover={setHoveredId}
        key={offer.id}
        offer={offer}
        cardType={cardType}
      />))}
    </div>
  );
}

export default ListOfferHotel;
