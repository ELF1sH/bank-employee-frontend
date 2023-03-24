import React from 'react';
import {
  Table, TablePaginationConfig, Tag,
} from 'antd';

import { IEmployee } from '../../../domain/entities/users/employee';

const { Column, ColumnGroup } = Table;

export interface ClientsTableViewProps {
  pagination: TablePaginationConfig;
  dataSource: IEmployee[];
  onChange: (pagination: TablePaginationConfig) => void;
  onClickRow: Function;
}

const EmployeesTableView: React.FC<ClientsTableViewProps> = ({
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
    onRow={(record: IEmployee) => ({
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
      render={(_, { isBlocked }: IEmployee) => (
        <>
          {isBlocked ? <Tag color="red">Blocked</Tag> : null}
        </>
      )}
    />
  </Table>
);

export default EmployeesTableView;
