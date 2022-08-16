export const sortHotelByRating = (hotelA, hotelB) => {
  if (hotelA.rating > hotelB.rating) {
    return -1;
  }

  if (hotelA.rating < hotelB.rating) {
    return 1;
  }

  return 0;
};

export const sortHotelByPriseToHigh = (hotelA, hotelB) => {
  if (hotelA.price > hotelB.price) {
    return -1;
  }

  if (hotelA.price < hotelB.price) {
    return 1;
  }

  return 0;
};

export const sortHotelByPriseToLow = (hotelA, hotelB) => {
  if (hotelA.price > hotelB.price) {
    return 1;
  }

  if (hotelA.price < hotelB.price) {
    return -1;
  }

  return 0;
};


