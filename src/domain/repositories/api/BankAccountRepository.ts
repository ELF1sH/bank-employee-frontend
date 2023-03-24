import { AxiosResponse } from 'axios';

import { axiosInstance as axios } from '../axiosInstance';
import { IBankAccountRepository } from './interfaces/IBankAccountRepository';
import { IBankAccount } from '../../entities/bankAccounts/bankAccount';
import { IOperation } from '../../entities/bankAccounts/operation';

class BankAccountRepository implements IBankAccountRepository {
  public getBankAccounts(payload: { id: string }) {
    return axios
      .get(`/bank-accounts?ownerId=${payload.id}`)
      .then((response: AxiosResponse<IBankAccount[]>) => response.data);
  }

  public getBankAccount(payload: { id: string }) {
    return axios
      .get(`/bank-account?id=${payload.id}`)
      .then((response: AxiosResponse<IBankAccount>) => response.data);
  }

  public getOperationsHistory(payload: { id: string }) {
    return axios
      .get(`/operations-history?id=${payload.id}`)
      .then((response: AxiosResponse<IOperation[]>) => response.data);
  }
}

export const bankAccountRepository = new BankAccountRepository();
