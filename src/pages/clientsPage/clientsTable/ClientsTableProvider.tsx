import React, { memo } from 'react';

import ClientsTableController from './ClientsTableController';
import { ClientsTableViewModel } from './ClientsTableViewModel';
import { GetClientsUseCase } from '../../../domain/useCases/clients/GetClientsUseCase';
import { clientsRepository } from '../../../domain/repositories/api/ClientsRepository';
import { useNotifications } from '../../../modules/notification/useNotifications';

const ClientsTableProvider: React.FC = () => {
  const { onError } = useNotifications();

  // const getClientsUseCase = new GetClientsUseCase(clientsRepository, onError);

  const getClientsUseCase1 = new GetClientsUseCase(
    clientsRepository.getClients,
    onError,
  );

  const viewModel = new ClientsTableViewModel(getClientsUseCase1);

  return (
    <ClientsTableController viewModel={viewModel} />
  );
};

export default memo(ClientsTableProvider);
