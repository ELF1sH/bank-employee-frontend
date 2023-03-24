import { ICreateCreditTariffPayload, ICreditTariff } from '../../../entities/credit/creditTariff';
import { ICreditAccount } from '../../../entities/credit/creditAccount';

export interface ICreditRepository {
  getCreditTariffs: () => Promise<ICreditTariff[]>;
  createCreditTariff: (payload: ICreateCreditTariffPayload) => Promise<ICreditTariff[]>;
  getCreditAccounts: (payload: { id: string }) => Promise<ICreditAccount[]>;
}
