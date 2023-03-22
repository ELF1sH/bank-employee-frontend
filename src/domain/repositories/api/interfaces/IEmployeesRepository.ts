import { IPaginationRequest } from '../../../entities/common/pagination';
import { ICreateEmployeePayload, IEmployee } from '../../../entities/users/employee';
import { IBlockUserPayload } from './IClientsRepository';

export interface IEmployeesRepository {
  getEmployees: (pagination: IPaginationRequest) => Promise<IGetEmployeesResponse>;
  getEmployee: (payload: { id: string }) => Promise<IEmployee>;
  createEmployee: (payload: ICreateEmployeePayload) => Promise<ICreateEmployeeResponse>;
  blockEmployee: (payload: IBlockUserPayload) => Promise<void>;
}

export type IGetEmployeesResponse = IEmployee[];

export interface ICreateEmployeeResponse {
  id: string;
}
