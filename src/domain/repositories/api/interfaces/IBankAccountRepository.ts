import { IBankAccount } from '../../../entities/bankAccounts/bankAccount';
import { IOperation } from '../../../entities/bankAccounts/operation';

export interface IBankAccountRepository {
  getBankAccount: (payload: { id: string }) => Promise<IBankAccount>;
  getBankAccounts: (payload: { id: string }) => Promise<IBankAccount[]>;
  getOperationsHistory: (payload: { id: string }) => Promise<IOperation[]>;
}
