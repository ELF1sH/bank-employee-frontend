import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { IUser } from '../../entities/users/user';
import { APIUseCase } from '../common/APIUseCase';

export class BlockUserUseCase extends APIUseCase<{ id: string }, IUser> {
  public constructor(
    requestPayload: (payload: { id: string }) => Promise<IUser>,
    onError: ShowErrorFunction,
    onSuccess: ShowSuccessNotificationFunction,
  ) {
    super(
      requestPayload,
      onError,
      onSuccess,
      ErrorNotificationType.FAILED_TO_SEND_DATA,
      SuccessNotificationType.SUCCESSFULLY_BLOCKED,
    );
  }
}
