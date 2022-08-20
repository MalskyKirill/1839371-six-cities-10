import { createAction } from '@reduxjs/toolkit';

import {AuthorizationStatus, AppRoute} from '../consts';

export const selectCity = createAction('app/selectCity');

export const loadOffers = createAction('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('app/setError');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
