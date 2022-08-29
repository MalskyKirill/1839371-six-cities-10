import FavoriteHotelCard from '../favorite-hotel-card/favorite-hotel-card';
import React from 'react';
import { useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../consts';
import {selectCity} from '../../store/action';


type ListFavoriteOfferHotelProps ={
  favoriteOffers: any,
}


function ListFavoriteOfferHotel ({favoriteOffers}: ListFavoriteOfferHotelProps) {
  const dispatch = useAppDispatch();

  const citiesList = [...new Set(favoriteOffers.map((offer: { city: { name: any; }; }) => offer.city.name))];

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
            {favoriteOffers.filter((offer: { city: { name: unknown; }; }) => offer.city.name === city).map((offer: JSX.IntrinsicAttributes & { favoriteOffers: any; isPremium: boolean; id: number; title: string; isFavorite: boolean; previewImage: string; price: number; rating: number; type: string; }) => <FavoriteHotelCard {...offer} key={`${city}-${offer.id}`} />)}
          </div>
        </li>))}
    </React.Fragment>
  );
}

export default ListFavoriteOfferHotel;

