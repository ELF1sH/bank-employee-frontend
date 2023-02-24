import axios, { AxiosResponse } from 'axios';

import { IClientsRepository, IGetClientsResponse } from './interfaces/IClientsRepository';
import { IPaginationRequest } from '../../entities/common/pagination';
import { mockLogin } from './mocks/clientsMocks';

mockLogin();

class ClientsRepository implements IClientsRepository {
  getClients(pagination: IPaginationRequest) {
    return axios
      .get(`/classes?currentPage=${pagination.currentPage}&itemsPerPage=${pagination.itemsPerPage}`)
      .then((response: AxiosResponse<IGetClientsResponse>) => response.data);
  }
}

export const clientsRepository = new ClientsRepository();
