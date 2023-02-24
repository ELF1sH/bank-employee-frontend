import { IPaginationRequest, IPaginationResponse } from '../../../entities/common/pagination';
import { IClient } from '../../../entities/users/client';

export interface IClientsRepository {
  getClients: (pagination: IPaginationRequest) => Promise<IGetClientsResponse>;
}

export interface IGetClientsResponse extends IPaginationResponse {
  clients: IClient[];
}
