import dayjs from 'dayjs';

export const sortHotelByRating = (hotelA: { rating: number; }, hotelB: { rating: number; }) => {
  if (hotelA.rating > hotelB.rating) {
    return -1;
  }

  if (hotelA.rating < hotelB.rating) {
    return 1;
  }

  return 0;
};

export const sortHotelByPriseToHigh = (hotelA: { price: number; }, hotelB: { price: number; }) => {
  if (hotelA.price < hotelB.price) {
    return -1;
  }

  if (hotelA.price > hotelB.price) {
    return 1;
  }

  return 0;
};

export const sortHotelByPriseToLow = (hotelA: { price: number; }, hotelB: { price: number; }) => {
  if (hotelA.price < hotelB.price) {
    return 1;
  }

  if (hotelA.price > hotelB.price) {
    return -1;
  }

  return 0;
};

export const getFormattedDate = (date: string, format: string): string => dayjs(date).format(format);

export const getRandomNumber = (a: number, b: number): number => {
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));

  return Number((Math.random() * (max - min) + min).toFixed());
};

export const sortCommentsByDate = (a: any, b: any) => dayjs(b.date).diff(dayjs(a.date), 'ms');

export const upperCaseFirstLater = (str: string) => str[0].toUpperCase() + str.substring(1);


