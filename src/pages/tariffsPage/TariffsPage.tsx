import React, { useContext } from 'react';

import TariffsGrid from './components/tariffsGrid/TariffsGridProvider';
import PageHeader from '../../components/ui/molecules/pageHeader/PageHeader';
import PlusIcon from '../../components/ui/atoms/icons/PlusIcon';
import Button from '../../components/ui/atoms/button/Button';
import { useStore } from '../../storesMobx/MobxStoreProvider';

const TariffsPage: React.FC = () => {
  const { tariffsPageStore } = useStore();

  const { setIsModalOpened } = tariffsPageStore;

  return (
    <>
      <PageHeader header="Credit tariffs">
        <Button type="text" icon={<PlusIcon />} onClick={() => setIsModalOpened(true)}>Create new credit tariff</Button>
      </PageHeader>

      <TariffsGrid />
    </>
  );
};

export default TariffsPage;
