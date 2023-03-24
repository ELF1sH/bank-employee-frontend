import { IUser } from './user';

export interface IClient extends IUser { }

export type ICreateClientPayload = Omit<IClient, 'id' | 'isBlocked'>
