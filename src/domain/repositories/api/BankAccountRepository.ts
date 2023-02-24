import axios, { AxiosResponse } from 'axios';

import { IBankAccountRepository } from './interfaces/IBankAccountRepository';
import { IBankAccount } from '../../entities/bankAccounts/bankAccount';
import { mockGettingBankAccountsList } from './mocks/bankAccountMocks';

mockGettingBankAccountsList();

class BankAccountRepository implements IBankAccountRepository {
  public getBankAccounts(id: string) {
    return axios
      .get(`/bank-accounts?id=${id}`)
      .then((response: AxiosResponse<IBankAccount[]>) => response.data);
  }
}

export const bankAccountRepository = new BankAccountRepository();
