import {createReducer} from '@reduxjs/toolkit';
import { selectCity } from './action';
import { offers } from '../moks/offers';

const initialState = {
  city: 'Paris',
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    });
});

export {reducer};

