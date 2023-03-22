import axios, { AxiosResponse } from 'axios';

import { ICreditRepository } from './interfaces/ICreditRepository';
import { ICreateCreditTariffPayload, ICreditTariff } from '../../entities/credit/creditTariff';

class CreditRepository implements ICreditRepository {
  public getCreditTariffs(): Promise<ICreditTariff[]> {
    return axios
      .get('/get-tariffs')
      .then((response: AxiosResponse<ICreditTariff[]>) => response.data);
  }

  public createCreditTariff(payload: ICreateCreditTariffPayload): Promise<ICreditTariff[]> {
    return axios
      .post('/create-credit-tariff', payload)
      .then((response: AxiosResponse<ICreditTariff[]>) => response.data);
  }
}

export const creditRepository = new CreditRepository();
