import { createAction } from '@reduxjs/toolkit';

import {AuthorizationStatus, AppRoute} from '../consts';

export const selectCity = createAction('app/selectCity');

export const loadOffers = createAction('data/loadOffers');

export const loadOffer = createAction('data/loadOffer');

export const loadOffersNearby = createAction('data/offersNearby');

export const loadFavoriteOffers = createAction('data/favoriteOffers');

export const loadComments = createAction('data/comments');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('app/setError');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const updateUser = createAction('user/updateUser');

export const notFoundAction = createAction('app/notFound');

export const toggleFavoriteOffersAction = createAction('data/toggleFavoriteOffers');
