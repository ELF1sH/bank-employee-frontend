import {
  action, computed, makeObservable, observable, toJS,
} from 'mobx';

import { CreateClientUseCase } from '../../../domain/useCases/clients/CreateClientUseCase';
import { FieldData } from '../../../utils/form/fieldData';
import { fieldsData } from './fieldsData';
import { ICreateClientPayload } from '../../../domain/entities/users/client';

export class CreateClientModalViewModel {
  @observable private _fieldsData: FieldData[] = fieldsData;

  public constructor(
    private _createClientUseCase: CreateClientUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get fieldsData() {
    return toJS(this._fieldsData);
  }

  @action public setFieldsData(fieldsData: FieldData[]) {
    this._fieldsData = fieldsData;
  }

  @action public async createClient() {
    const payload = this.fieldsData.reduce((acc, cur: FieldData) => {
      let key = '';

      if (Array.isArray(cur.name)) {
        key = `${cur.name[0].toString()}`;
      }

      return { ...acc, [key]: cur.value };
    }, {});

    const clientPayload = payload as unknown as ICreateClientPayload;

    return this._createClientUseCase.fetch(clientPayload);
  }
}
