/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';

import { LoginButton } from './styled';
import { FormErrors } from '../../../../utils/form/useFormError';

interface AuthFormViewProps {
  isLoading: boolean;
  onSubmit: (username: string, password: string) => Promise<void>;
  getValidateMessages: () => FormErrors;
}

const AuthFormView: React.FC<AuthFormViewProps> = ({
  isLoading,
  onSubmit,
  getValidateMessages,
}) => (
  <Form
    onFinish={(values) => onSubmit(values.Username, values.Password)}
    layout="vertical"
    validateMessages={getValidateMessages()}
  >
    <LoginButton type="primary" htmlType="submit" loading={isLoading} role="link" href="http://localhost:3002?redirect=employee">
      Войти
    </LoginButton>
  </Form>
);

export default observer(AuthFormView);
