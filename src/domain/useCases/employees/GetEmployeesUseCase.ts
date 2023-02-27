import { IPaginationRequest } from '../../entities/common/pagination';
import { IGetEmployeesResponse } from '../../repositories/api/interfaces/IEmployeesRepository';
import { APIUseCase } from '../common/APIUseCase';

export class GetEmployeesUseCase extends APIUseCase<IPaginationRequest, IGetEmployeesResponse> { }
