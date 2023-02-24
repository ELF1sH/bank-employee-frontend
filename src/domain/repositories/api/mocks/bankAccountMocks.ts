import { mock } from './common';
import { getBankAccounts } from './data/getBankAccounts';

export const mockGettingBankAccountsList = () => {
  mock
    .onGet(/\/bank-accounts\?id=*/)
    .reply(() => [200, getBankAccounts]);
};
