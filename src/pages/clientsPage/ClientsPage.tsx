import React from 'react';

import ClientsTable from './clientsTable/ClientsTableProvider';
import PageHeader from '../../components/ui/molecules/pageHeader/PageHeader';
import PlusIcon from '../../components/ui/atoms/icons/PlusIcon';
import Button from '../../components/ui/atoms/button/Button';

const ClientsPage: React.FC = () => (
  <>
    <PageHeader header="Clients">
      <Button type="text" icon={<PlusIcon />}>Create new client</Button>
    </PageHeader>
    <ClientsTable />
  </>
);

export default ClientsPage;
