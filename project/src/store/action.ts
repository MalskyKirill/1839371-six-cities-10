import { createAction } from '@reduxjs/toolkit';

// selectCity
// initOffers


// const cities = ['Amsterdam', 'Hamburg'];

// export const citiesAction = {

// return <div>
//   {cities.map((cityName, index) => <div key={cityName} onClick={() => dispatch(selectCity(cityName))}>{cityName}</div>) }
// </div>
// }


export const selectCity = createAction('app/selectCity');
