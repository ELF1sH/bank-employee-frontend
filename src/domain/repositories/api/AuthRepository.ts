import { AxiosResponse } from 'axios';

import { axiosInstance as axios } from '../axiosInstance';
import { IAuthRepository } from './interfaces/IAuthRepository';
import { ILoginPayload, ILoginResponse } from '../../entities/auth/auth';

class AuthRepository implements IAuthRepository {
  public login(payload: ILoginPayload) {
    return axios
      .post('/login', payload)
      .then((response: AxiosResponse<ILoginResponse>) => response.data);
  }
}

export const authRepository = new AuthRepository();
