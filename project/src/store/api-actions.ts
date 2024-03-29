import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {Offers} from '../types/offer';
import {loadOffers, loadOffer, requireAuthorization, setError, setDataLoadedStatus, redirectToRoute, loadFavoriteOffers, loadComments, loadOffersNearby, updateUser, toggleFavoriteOffersAction} from './action';
import {saveToken, dropToken} from '../servises/token';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, AppRoute} from '../consts';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {store} from './';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async(_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const loadOfferAction = createAsyncThunk<void, any, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async(id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}`);
    dispatch(loadOffer(data));
  },
);

export const loadCommentsAction = createAsyncThunk<void, any, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComments',
  async(id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Comments}/${id}`);
    dispatch(loadComments(data));
  },
);

export const loadFavoriteOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteOffers',
  async(_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.FavoriteOffers);
    dispatch(loadFavoriteOffers(data));
  },
);

export const loadOffersNearbyAction = createAsyncThunk<void, any, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffersNearby',
  async(id, {dispatch, extra: api}) => {
    const {data} = await api.get(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(loadOffersNearby(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(updateUser(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(updateUser(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'user/logout',
    async (_arg, {dispatch, extra: api}) => {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    },
  );


export const addCommentAction = createAsyncThunk<void, any, { dispatch: AppDispatch, state: State, extra: AxiosInstance }>(
  'data/addComment',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    const { data } = await api.post<any>(`${APIRoute.Comments}/${id}`, { comment, rating });
    dispatch(loadComments(data));
  },
);

export const toggleFavoriteAction = createAsyncThunk<void, any, { dispatch: AppDispatch, state: State, extra: AxiosInstance }>(
  'data/toggleFavorite',
  async ({ id, isFavorite }, { dispatch, extra: api }) => {
    const { data } = await api.post<any>(`${APIRoute.FavoriteOffers}/${id}/${isFavorite ? 0 : 1}`);
    dispatch(toggleFavoriteOffersAction(data));
  },
);
