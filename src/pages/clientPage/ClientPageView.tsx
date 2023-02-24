import React from 'react';
import { Table, Tag, Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Column from 'antd/es/table/Column';
import Title from 'antd/es/typography/Title';

import { IClient } from '../../domain/entities/users/client';
import PageHeader from '../../components/ui/molecules/pageHeader/PageHeader';
import Button from '../../components/ui/atoms/button/Button';
import { IBankAccount } from '../../domain/entities/bankAccounts/bankAccount';

const { Text } = Typography;

export interface ClientPageViewProps {
  client: IClient;
  bankAccounts: IBankAccount[];
  onClickBankAccountRow: (id: string) => void;
  blockUser: (id: string) => void;
  bankToClientsList: () => void;
}

const ClientPageView: React.FC<ClientPageViewProps> = ({
  client,
  bankAccounts,
  onClickBankAccountRow,
  blockUser,
  bankToClientsList,
}) => (
  <>
    <PageHeader header={`Client '${client.lastName} ${client.firstName} ${client.middleName}'`}>
      <Button onClick={bankToClientsList}>Back to the clients list</Button>

      {
        client.isBlocked
          ? <Tag color="red">Blocked</Tag>
          : <Button danger type="primary" onClick={() => blockUser(client.id)}>Block client</Button>
      }
    </PageHeader>
    <Paragraph>
      <Text strong>First name:</Text>
      &nbsp;
      {client.firstName}
    </Paragraph>
    <Paragraph>
      <Text strong>last name:</Text>
      &nbsp;
      {client.lastName}
    </Paragraph>
    <Paragraph>
      <Text strong>Middle name:</Text>
      &nbsp;
      {client.middleName}
    </Paragraph>
    <Paragraph>
      <Text strong>Number of bank accounts:</Text>
      &nbsp;
      {client.numberOfBankAccounts}
    </Paragraph>
    <Paragraph>
      <Text strong>Number of credits taken:</Text>
      &nbsp;
      {client.numberOfCredits}
    </Paragraph>

    <Title level={3}>Bank accounts</Title>

    <Table
      dataSource={bankAccounts}
      pagination={false}
      bordered
      onRow={(record: IBankAccount) => ({
        onClick: () => onClickBankAccountRow(record.id),
      })}
      rowKey={(record) => record.id}
    >
      <Column title="Account number" dataIndex="accountNumber" key="accountNumber" />
      <Column title="Balance" dataIndex="balance" key="balance" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={(_, record: IBankAccount) => (
          record.isClosed && <Tag color="red">Closed</Tag>
        )}
      />
    </Table>
  </>
);

export default ClientPageView;
