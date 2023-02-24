import React from 'react';
import { Tag } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';

import { IClient } from '../../domain/entities/users/client';
import PageHeader from '../../components/ui/molecules/pageHeader/PageHeader';
import Button from '../../components/ui/atoms/button/Button';

export interface ClientPageViewProps {
  client: IClient;
}

const ClientPageView: React.FC<ClientPageViewProps> = ({
  client,
}) => (
  <>
    <PageHeader header={`Client '${client.lastName} ${client.firstName} ${client.middleName}'`}>
      {
        client.isBlocked
          ? <Tag color="red">Blocked</Tag>
          : <Button danger type="primary">Block client</Button>
      }
    </PageHeader>
    <Paragraph>{`Number of bank accounts: ${client.numberOfBankAccounts}`}</Paragraph>
    <Paragraph>{`Number of credits taken: ${client.numberOfCredits}`}</Paragraph>
  </>
);

export default ClientPageView;
