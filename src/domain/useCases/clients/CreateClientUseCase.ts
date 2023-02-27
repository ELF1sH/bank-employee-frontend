import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { IClient, ICreateClientPayload } from '../../entities/users/client';
import { APIUseCase } from '../common/APIUseCase';

export class CreateClientUseCase extends APIUseCase<ICreateClientPayload, IClient> {
  constructor(
    requestCallback: (payload: ICreateClientPayload) => Promise<IClient>,
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
