import {
  action, computed, makeObservable, observable, toJS,
} from 'mobx';

import { FieldData } from '../../../utils/form/fieldData';
import { fieldsData } from './fieldsData';
import { CreateEmployeeUseCase } from '../../../domain/useCases/employees/CreateEmployeeUseCase';
import { ICreateEmployeePayload } from '../../../domain/entities/users/employee';
import { ICreateClientPayload } from '../../../domain/entities/users/client';

export class CreateEmployeeModalViewModel {
  @observable private _fieldsData: FieldData[] = fieldsData;

  public constructor(
    private _createEmployeeUseCase: CreateEmployeeUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get fieldsData() {
    return toJS(this._fieldsData);
  }

  @action public setFieldsData(fieldsData: FieldData[]) {
    this._fieldsData = fieldsData;
  }

  @action public async createEmployee() {
    const payload = this.fieldsData.reduce((acc, cur: FieldData) => {
      let key = '';

      if (Array.isArray(cur.name)) {
        key = `${cur.name[0].toString()}`;
      }

      return { ...acc, [key]: cur.value };
    }, {});

    const employeePayload = payload as unknown as ICreateClientPayload;

    return this._createEmployeeUseCase.fetch(employeePayload);
  }
}
