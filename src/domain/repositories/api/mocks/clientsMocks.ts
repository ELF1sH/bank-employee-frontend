import { mock } from './common';
import { getClientsResponse } from './data/getClientsResponse';

export const mockLogin = () => {
  mock
    .onGet(/\/classes*/)
    .reply((config) => [200, getClientsResponse]);
};
