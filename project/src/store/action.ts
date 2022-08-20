import { createAction } from '@reduxjs/toolkit';

export const selectCity = createAction('app/selectCity');

export const loadOffers = createAction('data/loadOffers');

export const requireAuthorization = createAction('user/requireAuthorization');

export const setError = createAction<string | null>('app/setError');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
