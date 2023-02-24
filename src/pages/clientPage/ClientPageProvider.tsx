import React from 'react';

import ClientPageController from './ClientPageController';
import { clientsRepository } from '../../domain/repositories/api/ClientsRepository';
import { useNotifications } from '../../modules/notification/useNotifications';
import { ClientPageViewModel } from './ClientPageViewModel';
import { GetClientUseCase } from '../../domain/useCases/clients/GetClientUseCase';

const ClientPageProvider: React.FC = () => {
  const { onError } = useNotifications();

  const getClientUseCase = new GetClientUseCase(clientsRepository, onError);

  const viewModel = new ClientPageViewModel(getClientUseCase);

  return (
    <ClientPageController viewModel={viewModel} />
  );
};

export default ClientPageProvider;
