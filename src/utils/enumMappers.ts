import { JobPosition } from '../domain/entities/users/employee';

export const getJobPosition = (jobPosition: JobPosition) => {
  switch (jobPosition) {
    case JobPosition.Cashier:
      return 'Cashier';
    case JobPosition.Manager:
      return 'Manager';
    case JobPosition.Director:
      return 'Director';
    default:
      return 'Unknown';
  }
};
