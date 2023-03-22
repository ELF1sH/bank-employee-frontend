import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { APIUseCase } from '../common/APIUseCase';

export class BlockEmployeeUseCase extends APIUseCase<{ id: string }, void> {
  public constructor(
    requestPayload: (payload: { id: string }) => Promise<void>,
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
