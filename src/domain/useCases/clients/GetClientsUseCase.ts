import { IGetClientsResponse } from '../../repositories/api/interfaces/IClientsRepository';
import { IPaginationRequest } from '../../entities/common/pagination';
import { APIUseCase } from '../common/APIUseCase';

export class GetClientsUseCase extends APIUseCase<IPaginationRequest, IGetClientsResponse> { }
