import axios, { AxiosResponse } from 'axios';

import { IUsersRepository } from './interfaces/IUsersRepository';
import { IClient } from '../../entities/users/client';
import { IEmployee } from '../../entities/users/employee';
import { mockUserBlocking } from './mocks/usersMock';

mockUserBlocking();

class UsersRepository implements IUsersRepository {
  public blockUser(payload: { id: string }) {
    return axios
      .post(`/block-user/${payload.id}`)
      .then((response: AxiosResponse<IClient | IEmployee>) => response.data);
  }
}

export const usersRepository = new UsersRepository();
