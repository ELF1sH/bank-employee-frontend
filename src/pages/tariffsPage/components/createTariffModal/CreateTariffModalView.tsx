import React from 'react';
import { Form, FormInstance, Modal } from 'antd';

import { FieldData } from '../../../../utils/form/fieldData';
import Input from '../../../../components/ui/atoms/input/Input';
import { FormErrors } from '../../../../utils/form/useFormError';

interface CreateTariffModalViewProps {
  form: FormInstance;
  isModalOpened: boolean;
  confirmLoading: boolean,
  handleOk: () => void;
  handleCancel: () => void;
  getValidateMessages: () => FormErrors;
}

const CreateTariffModalView: React.FC<CreateTariffModalViewProps> = ({
  form,
  isModalOpened,
  confirmLoading,
  handleOk,
  handleCancel,
  getValidateMessages,
}) => (
  <Modal
    title="Create new client"
    open={isModalOpened}
    onOk={handleOk}
    onCancel={handleCancel}
    confirmLoading={confirmLoading}
  >
    <Form
      form={form}
      layout="vertical"
      validateMessages={getValidateMessages()}
    >
      <Form.Item
        name="name"
        label="Tariff name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="interestRate"
        label="Interest rate"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
    </Form>
  </Modal>
);

export default CreateTariffModalView;
