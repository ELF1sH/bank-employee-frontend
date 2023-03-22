import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { ICreateClientPayload } from '../../entities/users/client';
import { APIUseCase } from '../common/APIUseCase';
import { ICreateClientResponse } from '../../repositories/api/interfaces/IClientsRepository';

export class CreateClientUseCase extends APIUseCase<ICreateClientPayload, ICreateClientResponse> {
  constructor(
    requestCallback: (payload: ICreateClientPayload) => Promise<ICreateClientResponse>,
    onError: ShowErrorFunction,
    onSuccess: ShowSuccessNotificationFunction,
  ) {
    super(
      requestCallback,
      onError,
      onSuccess,
      ErrorNotificationType.FAILED_TO_SEND_DATA,
      SuccessNotificationType.SUCCESSFULLY_CREATED,
    );
  }
}
