import {createReducer} from '@reduxjs/toolkit';
import { selectCity, loadOffers, requireAuthorization, setDataLoadedStatus, setError } from './action';
import { offers } from '../moks/offers';
import { AuthorizationStatus } from '../consts';
import {Offer} from '../types/offer';


type InitalState = {
  currentOffer: any;
  city: string,
  offers: Offer[],
  authorizationStatus: AuthorizationStatus,
  isDataLoader: boolean,
  error: string | null,
  reviews: any,
  user:any,
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
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoader = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
