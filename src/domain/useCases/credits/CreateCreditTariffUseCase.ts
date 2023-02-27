import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { ICreateCreditTariffPayload } from '../../entities/credit/creditTariff';
import { APIUseCase } from '../common/APIUseCase';

export class CreateCreditTariffUseCase extends APIUseCase<ICreateCreditTariffPayload, void> {
  public constructor(
    requestCallback: (payload: ICreateCreditTariffPayload) => Promise<void>,
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
