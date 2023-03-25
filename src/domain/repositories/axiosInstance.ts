import axios, { AxiosError, AxiosResponse } from 'axios';

import { history } from '../../utils/history';
import { TokenRepository } from './other/TokenRepository';

const tokenRepository = new TokenRepository();

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:7000/api',
  headers: {
    Authorization: tokenRepository.getAccessToken(),
  },
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const status = error.response?.status;

    // eslint-disable-next-line max-len
    // TODO: if we get 401 but the problem is expired access token, we have to get a new one using refresh token
    // eslint-disable-next-line max-len
    // TODO if we get 401 but the problem is expired refresh token, we have to history.navigate?.('/')
    if (status === 401) {
      history.navigate?.('/');
    }
  },
);
