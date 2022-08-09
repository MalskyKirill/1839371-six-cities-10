import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { offers } from './moks/offers';
import { reviews } from './moks/reviews';
import { store } from './store/index';
import { CITIES } from './consts';

// const Rating = {
//   STARS_COUNT: 4.5,
// };

const Place = {
  PLACES_COUNT: 100,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        placesCount={Place.PLACES_COUNT}
        offers={offers}
        reviews={reviews}
        cities={CITIES}
      />
    </Provider>
  </React.StrictMode>,
);
