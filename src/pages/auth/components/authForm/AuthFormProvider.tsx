import React from 'react';

import { AuthViewModel } from './AuthViewModel';
import AuthFormController from './AuthFormController';

const AuthFormProvider: React.FC = () => {
  const viewModel = new AuthViewModel();

  return (
    <>
      <AuthFormController viewModel={viewModel} />
    </>
  );
};

export default AuthFormProvider;
