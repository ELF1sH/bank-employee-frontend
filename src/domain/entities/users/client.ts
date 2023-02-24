import { IUser } from './user';

export interface IClient extends IUser {
  numberOfBankAccounts: number;
  numberOfCredits: number;
}
