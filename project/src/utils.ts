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


