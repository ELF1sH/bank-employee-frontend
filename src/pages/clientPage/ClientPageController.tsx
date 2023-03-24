import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import ClientPageView, { ClientPageViewProps } from './ClientPageView';
import { ClientPageViewModel } from './ClientPageViewModel';
import WithLoader from '../../components/ui/molecules/withLoader/WithLoader';

const ClientPageViewWithLoader = WithLoader<ClientPageViewProps>(ClientPageView, true);

interface ClientPageControllerProps {
  viewModel: ClientPageViewModel;
}

const ClientPageController: React.FC<ClientPageControllerProps> = ({
  viewModel,
}) => {
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    viewModel.init(id!);
  }, [viewModel, id]);

  const onClickBankAccountRow = (id: string) => {
    navigate(`/bank-accounts/${id}`);
  };

  const bankToClientsList = () => {
    navigate('/clients');
  };

  return (
    <ClientPageViewWithLoader
      isLoading={viewModel.isLoading}
      client={viewModel.client!}
      bankAccounts={viewModel.bankAccounts}
      creditAccounts={viewModel.creditAccounts}
      onClickBankAccountRow={onClickBankAccountRow}
      blockUser={() => viewModel.blockUser(id!)}
      bankToClientsList={bankToClientsList}
    />
  );
};

export default observer(ClientPageController);
