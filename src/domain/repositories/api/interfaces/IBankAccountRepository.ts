import { IBankAccount } from '../../../entities/bankAccounts/bankAccount';

export interface IBankAccountRepository {
  getBankAccounts: (id: string) => Promise<IBankAccount[]>;
}
