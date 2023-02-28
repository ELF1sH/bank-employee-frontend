import React, { useContext } from 'react';
import { useForm } from 'antd/es/form/Form';
import { observer } from 'mobx-react-lite';

import CreateTariffModalView from './CreateTariffModalView';
import { useFormError } from '../../../../utils/form/useFormError';
import { CreateTariffModalViewModel } from './CreateTariffModalViewModel';
import { FieldData } from '../../../../utils/form/fieldData';
import { TariffsPageStore } from '../../store/TariffsPageStore';

interface CreateTariffModalControllerProps {
  viewModel: CreateTariffModalViewModel;
  pageStore: TariffsPageStore,
}

const CreateTariffModalController: React.FC<CreateTariffModalControllerProps> = ({
  viewModel,
  pageStore,
}) => {
  const [form] = useForm();

  const { getValidateMessages } = useFormError();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => viewModel.createTariff(values))
      .then(() => {
        pageStore.setIsModalOpened(false);
        form.resetFields();
      })
      .catch(((e) => {}));
  };

  const handleCancel = () => {
    pageStore.setIsModalOpened(false);
  };

  return (
    <CreateTariffModalView
      form={form}
      isModalOpened={pageStore.isModalOpened}
      confirmLoading={viewModel.confirmLoading}
      handleOk={handleOk}
      handleCancel={handleCancel}
      getValidateMessages={getValidateMessages}
    />
  );
};

export default observer(CreateTariffModalController);
