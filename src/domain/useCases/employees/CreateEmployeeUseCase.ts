import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { ICreateEmployeePayload, IEmployee } from '../../entities/users/employee';
import { APIUseCase } from '../common/APIUseCase';

export class CreateEmployeeUseCase extends APIUseCase<ICreateEmployeePayload, IEmployee> {
  public constructor(
    requestCallback: (payload: ICreateEmployeePayload) => Promise<IEmployee>,
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
