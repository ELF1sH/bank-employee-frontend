import {
  action, computed, makeObservable, observable, runInAction, toJS,
} from 'mobx';

import { IEmployee } from '../../domain/entities/users/employee';
import { GetEmployeeUseCase } from '../../domain/useCases/employees/GetEmployeeUseCase';
import { BlockEmployeeUseCase } from '../../domain/useCases/employees/BlockEmployeeUseCase';

export class EmployeePageViewModel {
  @observable private _isLoading: boolean = true;

  @observable private _employee: IEmployee | undefined = undefined;

  public constructor(
    private _getEmployeeUseCase: GetEmployeeUseCase,
    private _blockUserUseCase: BlockEmployeeUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get isLoading() {
    return toJS(this._isLoading);
  }

  @computed public get employee() {
    return toJS(this._employee);
  }

  @action private _setIsLoading(val: boolean) {
    this._isLoading = val;
  }

  @action public getEmployee(id: string) {
    this._setIsLoading(true);

    this._getEmployeeUseCase.fetch({ id })
      .then((employee) => {
        if (employee) {
          runInAction(() => {
            this._employee = employee;
          });
        }
      })
      .finally(() => {
        this._setIsLoading(false);
      });
  }

  @action public blockUser(id: string) {
    this._blockUserUseCase.fetch({ id })
      .then(() => {
        this.getEmployee(id);
      });
  }
}
