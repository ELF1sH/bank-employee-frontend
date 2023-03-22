import React from 'react';

import EmployeePageController from './EmployeePageController';
import { useNotifications } from '../../modules/notification/useNotifications';
import { EmployeePageViewModel } from './EmployeePageViewModel';
import { GetEmployeeUseCase } from '../../domain/useCases/employees/GetEmployeeUseCase';
import { employeesRepository } from '../../domain/repositories/api/EmployeesRepository';
import { BlockEmployeeUseCase } from '../../domain/useCases/employees/BlockEmployeeUseCase';

const EmployeePageProvider: React.FC = () => {
  const { onError, onSuccess } = useNotifications();

  const getEmployeeUseCase = new GetEmployeeUseCase(employeesRepository.getEmployee, onError);

  const blockUserUseCase = new BlockEmployeeUseCase(
    employeesRepository.blockEmployee,
    onError,
    onSuccess,
  );

  const viewModel = new EmployeePageViewModel(
    getEmployeeUseCase,
    blockUserUseCase,
  );

  return (
    <EmployeePageController viewModel={viewModel} />
  );
};

export default EmployeePageProvider;
