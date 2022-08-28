import {createReducer} from '@reduxjs/toolkit';
import { selectCity, loadOffers, requireAuthorization, setDataLoadedStatus, setError, updateUser, loadOffer, loadComments, loadOffersNearby, toggleFavoriteOffersAction, loadFavoriteOffers} from './action';
import { AuthorizationStatus } from '../consts';
import {Offer} from '../types/offer';


type InitalState = {
  currentOffer: any;
  city: any,
  offers: any,
  authorizationStatus: AuthorizationStatus,
  isDataLoader: boolean,
  error: string | null,
  reviews: any,
  user:any,
  favorites:any,
  comments: any,
  offersNearby: any,
}

const initialState: InitalState = {
  city: 'Paris',
  offers: [],
  reviews: [],
  currentOffer: null,
  favorites: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoader: false,
  error: null,
  user: null,
  comments: [],
  offersNearby: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favorites = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoader = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(updateUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(toggleFavoriteOffersAction, (state, action) => {
      const id = action.payload.id;

      if (state.currentOffer !== null && state.currentOffer.id === id) {
        state.currentOffer.isFavorite = !state.currentOffer.isFavorite;
      }

      const offersIndex = state.offers.findIndex((offer) => offer.id === id);
      state.offers.splice(offersIndex, 1, action.payload);

      if (!action.payload.isFavorite) {
        const favoriteOffersIndex = state.favorites.findIndex((offer) => offer.id === id);
        if (favoriteOffersIndex > -1) {
          state.favorites.splice(favoriteOffersIndex, 1);
        }
      } else {
        state.favorites.push(action.payload);
      }

      const nearbyOffersIndex = state.offersNearby.findIndex((nearbyOffer) => nearbyOffer.id === id);
      if (nearbyOffersIndex > -1) {
        state.offersNearby.splice(nearbyOffersIndex, 1, action.payload);
      }
    });
});

export {reducer};
