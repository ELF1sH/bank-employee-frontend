import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { ICreateEmployeePayload } from '../../entities/users/employee';
import { APIUseCase } from '../common/APIUseCase';
import { ICreateEmployeeResponse } from '../../repositories/api/interfaces/IEmployeesRepository';

export class CreateEmployeeUseCase extends APIUseCase<
  ICreateEmployeePayload,
  ICreateEmployeeResponse
> {
  public constructor(
    requestCallback: (payload: ICreateEmployeePayload) => Promise<ICreateEmployeeResponse>,
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
