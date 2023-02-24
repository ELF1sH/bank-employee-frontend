import React, { memo } from 'react';

import ClientsPageController from './ClientsTableController';
import { ClientsTableViewModel } from './ClientsTableViewModel';
import { GetClientsUseCase } from '../../../domain/useCases/clients/GetClientsUseCase';
import { clientsRepository } from '../../../domain/repositories/api/ClientsRepository';
import { useNotifications } from '../../../modules/notification/useNotifications';

const ClientsTableProvider: React.FC = () => {
  const { onError } = useNotifications();

  const getClientsUseCase = new GetClientsUseCase(clientsRepository, onError);

  const viewModel = new ClientsTableViewModel(getClientsUseCase);

  return (
    <ClientsPageController viewModel={viewModel} />
  );
};

export default memo(ClientsTableProvider);
