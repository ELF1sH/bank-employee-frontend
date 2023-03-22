import { IUser } from './user';

export interface IClient extends IUser {

}

export interface ICreateClientPayload {
  firstName: string;
  lastName: string;
}
