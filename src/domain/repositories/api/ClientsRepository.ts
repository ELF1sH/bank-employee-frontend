import { AxiosResponse } from 'axios';

import { axiosInstance as axios } from '../axiosInstance';
import {
  IBlockUserPayload,
  IClientsRepository,
  ICreateClientResponse,
  IGetClientsResponse,
} from './interfaces/IClientsRepository';
import { IPaginationRequest } from '../../entities/common/pagination';
import { IClient, ICreateClientPayload } from '../../entities/users/client';

class ClientsRepository implements IClientsRepository {
  getClients(pagination: IPaginationRequest) {
    return axios
      .get('/clients/all')
      .then((response: AxiosResponse<IGetClientsResponse>) => response.data);
  }

  getClient(payload: { id: string }) {
    return axios
      .get(`/clients/${payload.id}`)
      .then((response: AxiosResponse<IClient>) => response.data);
  }

  createClient(payload: ICreateClientPayload) {
    return axios
      .post('/create-client', payload)
      .then((response: AxiosResponse<ICreateClientResponse>) => response.data);
  }

  async blockClient(payload: IBlockUserPayload) {
    await axios
      .post(`/clients/${payload.id}/block`);
  }
}

export const clientsRepository = new ClientsRepository();
