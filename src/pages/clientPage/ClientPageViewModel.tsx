import {
  action, computed, makeObservable, observable, runInAction, toJS,
} from 'mobx';

import { IClient } from '../../domain/entities/users/client';
import { GetClientUseCase } from '../../domain/useCases/clients/GetClientUseCase';

export class ClientPageViewModel {
  @observable private _client: IClient | undefined = undefined;

  public constructor(
    private _getClientUseCase: GetClientUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get client() {
    return toJS(this._client);
  }

  @action public getClient(id: string) {
    this._getClientUseCase.getClient(id)
      .then((client) => {
        if (client) {
          runInAction(() => {
            this._client = client;
          });
        }
      });
  }
}
