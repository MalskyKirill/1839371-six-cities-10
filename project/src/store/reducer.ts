import {createReducer} from '@reduxjs/toolkit';
import { selectCity, loadCities } from './action';
import { offers } from '../moks/offers';

const initialState = {
  city: 'Paris',
  offers: offers,
  //plase: 'Popular',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadCities, (state, action) => {
      state.cities = action.payload;
    });
});

export {reducer};

