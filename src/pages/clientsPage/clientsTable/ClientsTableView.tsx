import React from 'react';
import {
  Table, TablePaginationConfig, Tag,
} from 'antd';

import { IClient } from '../../../domain/entities/users/client';

const { Column, ColumnGroup } = Table;

export interface ClientsTableViewProps {
  pagination: TablePaginationConfig;
  dataSource: IClient[];
  onChange: (pagination: TablePaginationConfig) => void;
  onClickRow: Function;
}

const ClientsTableView: React.FC<ClientsTableViewProps> = ({
  pagination,
  dataSource,
  onChange,
  onClickRow,
}) => (
  <Table
    dataSource={dataSource}
    pagination={pagination}
    bordered
    onChange={onChange}
    onRow={(record: IClient) => ({
      onClick: () => onClickRow(record.id),
    })}
    rowKey={(record) => record.id}
  >
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup>
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(_, record: IClient) => (
        record.isBlocked ? <Tag color="red">Blocked</Tag> : null
      )}
    />
  </Table>
);

export default ClientsTableView;
