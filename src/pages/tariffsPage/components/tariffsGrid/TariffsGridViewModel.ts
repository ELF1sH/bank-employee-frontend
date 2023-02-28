import {
  action, computed, makeObservable, toJS,
} from 'mobx';

import { ICreditTariff } from '../../../../domain/entities/credit/creditTariff';
import { GetCreditTariffsUseCase } from '../../../../domain/useCases/credits/GetCreditTariffsUseCase';
import { TariffsPageStore } from '../../store/TariffsPageStore';

export class TariffsGridViewModel {
  constructor(
    private _getCreditTariffsUseCase: GetCreditTariffsUseCase,
    private _pageStore: TariffsPageStore,
  ) {
    makeObservable(this);
  }

  @computed public get tariffs(): ICreditTariff[] {
    return toJS(this._pageStore.tariffs);
  }

  @computed public get isLoading(): boolean {
    return this._pageStore.isLoading;
  }

  @action public async fetchTariffs(): Promise<void> {
    this._pageStore.setIsLoading(true);

    const tariffs = await this._getCreditTariffsUseCase.fetch();

    this._pageStore.setTariffs(tariffs ?? []);

    this._pageStore.setIsLoading(false);
  }
}
