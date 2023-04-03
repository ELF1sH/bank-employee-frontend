import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';

import BankAccountPageView, { BankAccountPageViewProps } from './BankAccountPageView';
import { BankAccountPageViewModel } from './BankAccountPageViewModel';
import WithLoader from '../../components/ui/molecules/withLoader/WithLoader';
import { IOperation } from '../../domain/entities/bankAccounts/operation';

const BankAccountPageViewWithLoader = WithLoader<BankAccountPageViewProps>(
  BankAccountPageView,
  true,
);

interface BankAccountPageControllerProps {
  viewModel: BankAccountPageViewModel;
}

const BankAccountPageController: React.FC<BankAccountPageControllerProps> = ({
  viewModel,
}) => {
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await viewModel.getBankAccount(id!);
    })();
  }, [viewModel, id]);

  const backToTheClientPage = () => {
    navigate(-1);
  };

  const [operations, setOperations] = useState<IOperation[]>([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Websocket Соединение установлено.');

      ws.send(JSON.stringify({
        msg_type: 'operations-all',
        receiverId: id,
      }));
    };

    ws.onmessage = (e) => {
      console.info('Websocket message');
      console.log(e.data);

      const data = JSON.parse(e.data);

      if (Array.isArray(data)) {
        setOperations(data as IOperation[]);
      } else {
        setOperations((oldOperations) => [
          ...oldOperations,
          data as IOperation,
        ]);
      }
    };
  }, []);

  return (
    <BankAccountPageViewWithLoader
      isLoading={viewModel.isLoading}
      bankAccount={viewModel.bankAccount}
      operationsHistory={operations}
      backToTheClientPage={backToTheClientPage}
    />
  );
};

export default observer(BankAccountPageController);
