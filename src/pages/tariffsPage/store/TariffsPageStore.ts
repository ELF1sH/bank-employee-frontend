import { action, makeObservable, observable } from 'mobx';

import MobxHelper from '../../../utils/MobxHelper';
import { ICreditTariff } from '../../../domain/entities/credit/creditTariff';
import { GetCreditTariffsUseCase } from '../../../domain/useCases/credits/GetCreditTariffsUseCase';

export class TariffsPageStore {
  @observable public isModalOpened: boolean = false;

  @observable public tariffs: ICreditTariff[] = [];

  @observable public isLoading: boolean = true;

  private _mobxHelper = new MobxHelper<typeof this>(this);

  constructor() {
    makeObservable(this);
  }

  @action public setIsModalOpened = (value: boolean) => this._mobxHelper.toggle('isModalOpened', value);

  @action public setTariffs = (value: ICreditTariff[]) => this._mobxHelper.toggle('tariffs', value);

  @action public setIsLoading = (value: boolean) => this._mobxHelper.toggle('isLoading', value);
}

export const tariffsPageStore = new TariffsPageStore();
