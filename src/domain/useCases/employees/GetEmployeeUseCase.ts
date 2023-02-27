import { IEmployee } from '../../entities/users/employee';
import { APIUseCase } from '../common/APIUseCase';

export class GetEmployeeUseCase extends APIUseCase<{ id: string }, IEmployee> { }
