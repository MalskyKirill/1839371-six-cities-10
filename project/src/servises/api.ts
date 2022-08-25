import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import {StatusCodes} from 'http-status-codes';
import { getToken } from './token';
import {store} from '../store';
import {notFoundAction} from '../store/action';
import {processErrorHandle} from './process-error-handle';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: false,
  [StatusCodes.NOT_FOUND]: false
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BACKEND_URL = 'https://10.react.pages.academy/six-cities';

const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && shouldDisplayError(error.response)) {
        processErrorHandle(error.response.data.error);
      }

      if (error.response?.status === StatusCodes.NOT_FOUND) {
        store.dispatch(notFoundAction());
      }

      throw error;
    }
  );

  return api;
};


