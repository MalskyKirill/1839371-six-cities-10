import { createAction } from '@reduxjs/toolkit';

// selectCity
// initOffers

/*
const cities = ['A', 'B'];

return <div>
    {cities.map((cityName, index) => <div key={cityName} onClick={() => dispatch(selectCity(cityName))}>{cityName}</div>) }
</div>

*/

export const Action = {
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg'
};

export const AmsterdamAction = createAction(`city/${Action.Amsterdam}`);
export const HamburgAction = createAction(`city/${Action.Hamburg}`);
