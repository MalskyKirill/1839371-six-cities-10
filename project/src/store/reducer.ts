import {createReducer} from '@reduxjs/toolkit';
import { Action, AmsterdamAction, HamburgAction } from './action';
import { offers } from '../moks/offers';

const initialState = {
  city: 'Amsterdam',
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(AmsterdamAction, (state) => {
      state.city = 'Amsterdam';
    })
    .addCase(HamburgAction, (state) => {
      state.city = 'Hamburg';
    });
});

export {reducer};

// export const updateStore = (state, action) => {
//   switch (action.type) {
//     case Action.Amsterdam:
//       return newState;
//     case Action.Hamburg:
//       return newState;
//     default:
//       return state;
//   }
// };
