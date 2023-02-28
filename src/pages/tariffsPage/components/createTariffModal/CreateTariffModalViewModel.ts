import {
  action, makeObservable, observable,
} from 'mobx';

import { ICreateCreditTariffPayload } from '../../../../domain/entities/credit/creditTariff';
import { CreateCreditTariffUseCase } from '../../../../domain/useCases/credits/CreateCreditTariffUseCase';
import { TariffsPageStore } from '../../store/TariffsPageStore';
import { FieldsData } from '../../../../utils/form/fieldData';
import MobxHelper from '../../../../utils/MobxHelper';

export class CreateTariffModalViewModel {
  @observable public confirmLoading: boolean = false;

  private _mobxHelper = new MobxHelper<typeof this>(this);

  public constructor(
    private _createCreditTariffUseCase: CreateCreditTariffUseCase,
    private _pageStore: TariffsPageStore,
  ) {
    makeObservable(this);
  }

  @action public setConfirmLoading = (value: boolean) => this._mobxHelper.toggle('confirmLoading', value);

  @action public async createTariff(fieldsData: FieldsData) {
    this.setConfirmLoading(true);

    const tariffPayload = fieldsData as unknown as ICreateCreditTariffPayload;

    const tariffs = await this._createCreditTariffUseCase.fetch(tariffPayload);

    this._pageStore.setTariffs(tariffs ?? []);
    this.setConfirmLoading(false);
  }
}
