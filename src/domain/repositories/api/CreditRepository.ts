import { AxiosResponse } from 'axios';

import { axiosInstance as axios } from '../axiosInstance';
import { ICreditRepository } from './interfaces/ICreditRepository';
import { ICreateCreditTariffPayload, ICreditTariff } from '../../entities/credit/creditTariff';
import { ICreditAccount } from '../../entities/credit/creditAccount';

class CreditRepository implements ICreditRepository {
  public getCreditTariffs(): Promise<ICreditTariff[]> {
    return axios
      .get('/tariffs/all')
      .then((response: AxiosResponse<ICreditTariff[]>) => response.data);
  }

  public createCreditTariff(payload: ICreateCreditTariffPayload): Promise<ICreditTariff[]> {
    return axios
      .post('/create-tariff', payload)
      .then((response: AxiosResponse<ICreditTariff[]>) => response.data);
  }

  public getCreditAccounts(payload: { id: string }): Promise<ICreditAccount[]> {
    const { id } = payload;

    return axios
      .get(`/credit-accounts?ownerId=${id}`)
      .then((response: AxiosResponse<ICreditAccount[]>) => response.data);
  }
}

export const creditRepository = new CreditRepository();
