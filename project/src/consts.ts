export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}
export enum AuthorizationStatus{
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout'
}

export const DROPDOWN_OPNION = [
  {
    label: 'Popular',
    value: 'Popular',
  },
  {
    label: 'Price: low to high',
    value: 'Price: low to high',
  },
  {
    label: 'Price: high to low',
    value: 'Price: high to low',
  },
  {
    label: 'Top rated first',
    value: 'Top rated first',
  },
];

export const SORT_HOTEL_TYPE = {
  DEFAULT: 'Popular',
  SORT_HOTEL_BY_RATING: 'Top rated first',
  SORT_HOTEL_BY_PRISE_TO_HIGH: 'Price: low to high',
  SORT_HOTEL_BY_PRISE_TO_LOW: 'Price: high to low',
};

export const TIMEOUT_SHOW_ERROR = 5000;

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const ACTIVE_ICON_URL = 'img/pin-active.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
