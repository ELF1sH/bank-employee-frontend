import { IUser } from './user';

export interface IEmployee extends IUser {
  jobPosition: JobPosition,
}

export enum JobPosition {
  Cashier = 0,
  Manager = 1,
  Director = 2,
}
