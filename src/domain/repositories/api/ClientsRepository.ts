import axios, { AxiosResponse } from 'axios';

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
      .get('http://127.0.0.1:7000/api/clients/all')
      .then((response: AxiosResponse<IGetClientsResponse>) => response.data);
  }

  getClient(payload: { id: string }) {
    return axios
      .get(`http://127.0.0.1:7000/api/clients/${payload.id}`)
      .then((response: AxiosResponse<IClient>) => response.data);
  }

  createClient(payload: ICreateClientPayload) {
    return axios
      .post('/create-client', payload)
      .then((response: AxiosResponse<ICreateClientResponse>) => response.data);
  }

  async blockClient(payload: IBlockUserPayload) {
    await axios
      .post(`/client/${payload.id}/block`);
  }
}

export const clientsRepository = new ClientsRepository();
