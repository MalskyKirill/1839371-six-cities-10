import { createAction } from '@reduxjs/toolkit';

import {AuthorizationStatus, AppRoute} from '../consts';

export const selectCity = createAction<string>('app/selectCity');

export const loadOffers = createAction<any>('data/loadOffers');

export const loadOffer = createAction<any>('data/loadOffer');

export const loadOffersNearby = createAction<any>('data/offersNearby');

export const loadFavoriteOffers = createAction<any>('data/favoriteOffers');

export const loadComments = createAction<any>('data/comments');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('app/setError');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const updateUser = createAction<any>('user/updateUser');

export const notFoundAction = createAction('app/notFound');

export const toggleFavoriteOffersAction = createAction<any>('data/toggleFavoriteOffers');
