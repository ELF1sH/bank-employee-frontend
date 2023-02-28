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
      .then(() => {
        pageStore.setIsModalOpened(false);

        return viewModel.createTariff();
      })
      .catch(((e) => {}));
  };

  const handleCancel = () => {
    pageStore.setIsModalOpened(false);
  };

  const onChange = (fieldsData: FieldData[]) => {
    viewModel.setFieldsData(fieldsData);
  };

  return (
    <CreateTariffModalView
      form={form}
      isModalOpened={pageStore.isModalOpened}
      fields={viewModel.fieldsData}
      onChange={onChange}
      handleOk={handleOk}
      handleCancel={handleCancel}
      getValidateMessages={getValidateMessages}
    />
  );
};

export default observer(CreateTariffModalController);
