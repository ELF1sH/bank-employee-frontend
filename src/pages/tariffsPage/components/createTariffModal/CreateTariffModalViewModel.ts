import {
  action, computed, makeObservable, observable, runInAction, toJS,
} from 'mobx';

import { FieldData } from '../../../../utils/form/fieldData';
import { fieldsData } from './fieldsData';
import { ICreateCreditTariffPayload } from '../../../../domain/entities/credit/creditTariff';
import { CreateCreditTariffUseCase } from '../../../../domain/useCases/credits/CreateCreditTariffUseCase';
import { TariffsPageStore } from '../../store/TariffsPageStore';

export class CreateTariffModalViewModel {
  @observable private _fieldsData: FieldData[] = fieldsData;

  public constructor(
    private _createCreditTariffUseCase: CreateCreditTariffUseCase,
    private _pageStore: TariffsPageStore,
  ) {
    makeObservable(this);
  }

  @computed public get fieldsData() {
    return toJS(this._fieldsData);
  }

  @action public setFieldsData(fieldsData: FieldData[]) {
    this._fieldsData = fieldsData;
  }

  @action public async createTariff() {
    this._pageStore.setIsLoading(true);

    const tariffPayloadArray = this.fieldsData.map((field) => (
      {
        [field.name.toString()]: field.value,
      }
    ));

    const tariffPayload = { ...tariffPayloadArray } as unknown as ICreateCreditTariffPayload;

    const tariffs = await this._createCreditTariffUseCase.fetch(tariffPayload);

    this._pageStore.setTariffs(tariffs ?? []);

    this._pageStore.setIsLoading(false);
  }
}
