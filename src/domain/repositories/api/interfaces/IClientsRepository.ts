import { IPaginationRequest, IPaginationResponse } from '../../../entities/common/pagination';
import { IClient, ICreateClientPayload } from '../../../entities/users/client';

export interface IClientsRepository {
  getClients: (pagination: IPaginationRequest) => Promise<IGetClientsResponse>;
  getClient: (payload: { id: string }) => Promise<IClient>;
  createClient: (payload: ICreateClientPayload) => Promise<ICreateClientResponse>;
  blockClient: (payload: IBlockUserPayload) => Promise<void>;
}

export type IGetClientsResponse = IClient[];

export interface IBlockUserPayload {
  id: string;
}

export interface ICreateClientResponse {
  id: string;
}
