import {
  action, computed, makeObservable, observable, runInAction, toJS,
} from 'mobx';

import { IBankAccount } from '../../domain/entities/bankAccounts/bankAccount';
import { GetBankAccountUseCase } from '../../domain/useCases/bankAccounts/GetBankAccountUseCase';
import { GetOperationsHistoryUseCase } from '../../domain/useCases/bankAccounts/GetOperationsHistoryUseCase';
import { IOperation } from '../../domain/entities/bankAccounts/operation';

export class BankAccountPageViewModel {
  @observable private _isLoading: boolean = true;

  @observable private _bankAccount: IBankAccount | undefined = undefined;

  public constructor(
    private _getBankAccountUseCase: GetBankAccountUseCase,
    private _getOperationsHistoryUseCase: GetOperationsHistoryUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get isLoading() {
    return toJS(this._isLoading);
  }

  @computed public get bankAccount() {
    return toJS(this._bankAccount);
  }

  @action private _setIsLoading(val: boolean) {
    this._isLoading = val;
  }

  @action public getBankAccount(id: string) {
    this._setIsLoading(true);

    this._getBankAccountUseCase.fetch({ id })
      .then((bankAccount) => {
        if (bankAccount) {
          runInAction(() => {
            this._bankAccount = bankAccount;
          });
        }
      })
      .finally(() => {
        this._setIsLoading(false);
      });
  }
}
