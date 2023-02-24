import { IBankAccount } from '../../../entities/bankAccounts/bankAccount';
import { IOperation } from '../../../entities/bankAccounts/operation';

export interface IBankAccountRepository {
  getBankAccounts: (id: string) => Promise<IBankAccount[]>;
  getBankAccount: (id: string) => Promise<IBankAccount>;
  getOperationsHistory: (id: string) => Promise<IOperation[]>;
}
