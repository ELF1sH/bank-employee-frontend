import axios, { AxiosResponse } from 'axios';

import { ICreateEmployeeResponse, IEmployeesRepository, IGetEmployeesResponse } from './interfaces/IEmployeesRepository';
import { IPaginationRequest } from '../../entities/common/pagination';
import { IEmployee, ICreateEmployeePayload } from '../../entities/users/employee';
import { IBlockUserPayload } from './interfaces/IClientsRepository';

class EmployeesRepository implements IEmployeesRepository {
  getEmployees(pagination: IPaginationRequest) {
    return axios
      .get('/employees/all')
      .then((response: AxiosResponse<IGetEmployeesResponse>) => response.data);
  }

  getEmployee(payload: { id: string }) {
    return axios
      .get(`/employees/${payload.id}`)
      .then((response: AxiosResponse<IEmployee>) => response.data);
  }

  createEmployee(payload: ICreateEmployeePayload) {
    return axios
      .post('/create-employee', payload)
      .then((response: AxiosResponse<ICreateEmployeeResponse>) => response.data);
  }

  async blockEmployee(payload: IBlockUserPayload) {
    await axios
      .post(`/employee/${payload.id}/block`);
  }
}

export const employeesRepository = new EmployeesRepository();
