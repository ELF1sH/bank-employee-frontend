import React, { memo } from 'react';

import TariffsGridController from './TariffsGridController';
import { TariffsGridViewModel } from './TariffsGridViewModel';
import { useNotifications } from '../../../../modules/notification/useNotifications';
import { GetCreditTariffsUseCase } from '../../../../domain/useCases/credits/GetCreditTariffsUseCase';
import { creditRepository } from '../../../../domain/repositories/api/CreditRepository';
import { useStore } from '../../../../storesMobx/MobxStoreProvider';

const TariffsGridProvider: React.FC = () => {
  const { onError } = useNotifications();

  const { tariffsPageStore } = useStore();

  const getTariffsUseCase = new GetCreditTariffsUseCase(creditRepository.getCreditTariffs, onError);

  const viewModel = new TariffsGridViewModel(getTariffsUseCase, tariffsPageStore);

  return (
    <TariffsGridController viewModel={viewModel} />
  );
};

export default memo(TariffsGridProvider);
