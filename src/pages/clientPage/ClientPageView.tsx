import React from 'react';
import { Table, Tag, Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Column from 'antd/es/table/Column';
import Title from 'antd/es/typography/Title';
import { observer } from 'mobx-react-lite';

import { IClient } from '../../domain/entities/users/client';
import PageHeader from '../../components/ui/molecules/pageHeader/PageHeader';
import Button from '../../components/ui/atoms/button/Button';
import { IBankAccount } from '../../domain/entities/bankAccounts/bankAccount';
import BackIcon from '../../components/ui/atoms/icons/BackIcon';
import { ICreditAccount } from '../../domain/entities/credit/creditAccount';

const { Text } = Typography;

export interface ClientPageViewProps {
  client: IClient;
  bankAccounts: IBankAccount[];
  creditAccounts: ICreditAccount[];
  onClickBankAccountRow: (id: string) => void;
  blockUser: (id: string) => void;
  bankToClientsList: () => void;
}

const ClientPageView: React.FC<ClientPageViewProps> = ({
  client,
  bankAccounts,
  creditAccounts,
  onClickBankAccountRow,
  blockUser,
  bankToClientsList,
}) => (
  <>
    <PageHeader header={`Client '${client.lastName} ${client.firstName}'`}>
      <Button icon={<BackIcon />} onClick={bankToClientsList}>Back to the clients list</Button>

      {
          !client.isBlocked && <Button danger type="primary" onClick={() => blockUser(client.id)}>Block client</Button>
        }
    </PageHeader>

    {
        client.isBlocked ? <Tag style={{ marginBottom: '20px' }} color="red">BLOCKED</Tag> : null
      }

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
      <Column title="Account number" dataIndex="id" key="accountNumber" />
      <Column title="Balance" dataIndex="balance" key="balance" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={(_, record: IBankAccount) => (
          <>
            {record.isClosed ? <Tag color="red">Closed</Tag> : null}
          </>
        )}
      />
    </Table>

    <Title level={3}>Credit accounts</Title>

    <Table
      dataSource={creditAccounts}
      pagination={false}
      bordered
      onRow={(record: IBankAccount) => ({
        onClick: () => onClickBankAccountRow(record.id),
      })}
      rowKey={(record) => record.id}
    >
      <Column title="Account number" dataIndex="accountNumber" key="accountNumber" />
      <Column title="Balance" dataIndex="balance" key="balance" />
      <Column title="Debt" dataIndex="debt" key="debt" />
      <Column title="Interest rate" dataIndex="percent" key="percent" />
      <Column title="Tariff ID" dataIndex="tariffId" key="tariffId" />
      <Column title="Owner ID" dataIndex="ownerId" key="ownerId" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={(_, record: IBankAccount) => (
          <>
            {record.isClosed ? <Tag color="red">Closed</Tag> : null}
          </>
        )}
      />
    </Table>
  </>
);

export default observer(ClientPageView);
