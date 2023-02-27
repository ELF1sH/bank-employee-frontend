import React from 'react';

import ClientPageController from './ClientPageController';
import { clientsRepository } from '../../domain/repositories/api/ClientsRepository';
import { useNotifications } from '../../modules/notification/useNotifications';
import { ClientPageViewModel } from './ClientPageViewModel';
import { GetClientUseCase } from '../../domain/useCases/clients/GetClientUseCase';
import { GetBankAccountsUseCase } from '../../domain/useCases/bankAccounts/GetBankAccountsUseCase';
import { bankAccountRepository } from '../../domain/repositories/api/BankAccountRepository';
import { BlockUserUseCase } from '../../domain/useCases/users/BlockUserUseCase';
import { usersRepository } from '../../domain/repositories/api/UsersRepository';

const ClientPageProvider: React.FC = () => {
  const { onError, onSuccess } = useNotifications();

  const getClientUseCase = new GetClientUseCase(clientsRepository.getClient, onError);

  const getBankAccountsUseCase = new GetBankAccountsUseCase(
    bankAccountRepository.getBankAccounts,
    onError,
  );

  const blockUserUseCase = new BlockUserUseCase(usersRepository.blockUser, onError, onSuccess);

  const viewModel = new ClientPageViewModel(
    getClientUseCase,
    getBankAccountsUseCase,
    blockUserUseCase,
  );

  return (
    <ClientPageController viewModel={viewModel} />
  );
};

export default ClientPageProvider;
