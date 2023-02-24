import { OperationType } from '../domain/entities/bankAccounts/operation';

export const getOperationType = (type: OperationType) => {
  switch (type) {
    case OperationType.Incoming:
      return 'Пополнение';
    case OperationType.Withdrawal:
      return 'Снятие';
    case OperationType.CreditIncoming:
      return 'Приход кредита';
    case OperationType.CreditRepayment:
      return 'Плата за кредит';
    default:
      return 'Неизвестная операция';
  }
};
