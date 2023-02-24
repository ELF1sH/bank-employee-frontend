import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

  useEffect(() => {
    (async () => {
      await viewModel.getClient(id ?? '');
    })();
  }, [viewModel, id]);

  return (
    <ClientPageViewWithLoader
      isLoading={!viewModel.client}
      client={viewModel.client!}
    />
  );
};

export default observer(ClientPageController);
