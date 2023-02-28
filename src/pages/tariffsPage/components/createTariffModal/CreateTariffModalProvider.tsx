import React from 'react';

import CreateTariffModalController from './CreateTariffModalController';
import { useNotifications } from '../../../../modules/notification/useNotifications';
import { CreateTariffModalViewModel } from './CreateTariffModalViewModel';
import { CreateCreditTariffUseCase } from '../../../../domain/useCases/credits/CreateCreditTariffUseCase';
import { creditRepository } from '../../../../domain/repositories/api/CreditRepository';
import { useStore } from '../../../../storesMobx/MobxStoreProvider';

const CreateTariffModalProvider: React.FC = () => {
  const { onError, onSuccess } = useNotifications();

  const { tariffsPageStore } = useStore();

  const createCreditTariffUseCase = new CreateCreditTariffUseCase(
    creditRepository.createCreditTariff,
    onError,
    onSuccess,
  );

  const viewModel = new CreateTariffModalViewModel(
    createCreditTariffUseCase,
    tariffsPageStore,
  );

  return (
    <CreateTariffModalController viewModel={viewModel} pageStore={tariffsPageStore} />
  );
};

export default CreateTariffModalProvider;
