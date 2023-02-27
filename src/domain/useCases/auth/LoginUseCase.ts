import { NavigateFunction } from 'react-router-dom';

import { ILoginPayload, ILoginResponse } from '../../entities/auth/auth';
import { ITokenRepository } from '../../repositories/other/interfaces/ITokenRepository';
import { ErrorNotificationType, ShowErrorFunction } from '../../../modules/notification/types';
import { APIUseCase } from '../common/APIUseCase';

export class LoginUseCase extends APIUseCase<ILoginPayload, ILoginResponse> {
  constructor(
    requestCallback: (payload: ILoginPayload) => Promise<ILoginResponse>,
    private readonly _tokenRepository: ITokenRepository,
    onError: ShowErrorFunction,
    private readonly _navigate: NavigateFunction,
  ) {
    super(
      requestCallback,
      onError,
      undefined,
      ErrorNotificationType.INCORRECT_LOGIN_OR_PASSWORD,
      undefined,
    );
  }

  public async fetch(loginPayload: ILoginPayload): Promise<ILoginResponse | void> {
    return super.fetch(loginPayload)
      .then((data) => {
        const accessToken = data?.accessToken;

        if (accessToken) {
          this._tokenRepository?.setAccessToken(accessToken);

          this._navigate('/clients');
        }
      });
  }
}
