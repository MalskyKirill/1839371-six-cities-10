import FavoriteHotelCard from '../favorite-hotel-card/favorite-hotel-card';
import { Offer } from '../../types/offer';
import React from 'react';
import { useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../consts';
import {selectCity} from '../../store/action';


function ListFavoriteOfferHotel ({favoriteOffers}) {
  const dispatch = useAppDispatch();

  const citiesList = [...new Set(favoriteOffers.map((offer) => offer.city.name))];

  return(
    <React.Fragment>
      {citiesList.map((city) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
                onClick={() => {dispatch(selectCity(city));}}
              >
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {favoriteOffers.filter((offer) => offer.city.name === city).map((offer) => <FavoriteHotelCard {...offer} key={`${city}-${offer.id}`} />)}
          </div>
        </li>))}
    </React.Fragment>
  );
}

export default ListFavoriteOfferHotel;

