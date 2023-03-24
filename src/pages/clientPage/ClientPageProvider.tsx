import React from 'react';

import ClientPageController from './ClientPageController';
import { clientsRepository } from '../../domain/repositories/api/ClientsRepository';
import { useNotifications } from '../../modules/notification/useNotifications';
import { ClientPageViewModel } from './ClientPageViewModel';
import { GetClientUseCase } from '../../domain/useCases/clients/GetClientUseCase';
import { GetBankAccountsUseCase } from '../../domain/useCases/bankAccounts/GetBankAccountsUseCase';
import { bankAccountRepository } from '../../domain/repositories/api/BankAccountRepository';
import { BlockClientUseCase } from '../../domain/useCases/clients/BlockClientUseCase';
import { GetCreditAccountsUseCase } from '../../domain/useCases/credits/getCreditAccountsUseCase';
import { creditRepository } from '../../domain/repositories/api/CreditRepository';

const ClientPageProvider: React.FC = () => {
  const { onError, onSuccess } = useNotifications();

  const getClientUseCase = new GetClientUseCase(clientsRepository.getClient, onError);

  const getBankAccountsUseCase = new GetBankAccountsUseCase(
    bankAccountRepository.getBankAccounts,
    onError,
  );

  const blockClientUseCase = new BlockClientUseCase(
    clientsRepository.blockClient,
    onError,
    onSuccess,
  );

  const getCreditAccountsUseCase = new GetCreditAccountsUseCase(
    creditRepository.getCreditAccounts,
    onError,
  );

  const viewModel = new ClientPageViewModel(
    getClientUseCase,
    getBankAccountsUseCase,
    blockClientUseCase,
    getCreditAccountsUseCase,
  );

  return (
    <ClientPageController viewModel={viewModel} />
  );
};

export default ClientPageProvider;
