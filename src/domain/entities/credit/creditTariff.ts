export interface ICreditTariff {
  id: string;
  name: string;
  percent: number;
  balance: number;
}

export type ICreateCreditTariffPayload = Omit<ICreditTariff, 'id'>;
