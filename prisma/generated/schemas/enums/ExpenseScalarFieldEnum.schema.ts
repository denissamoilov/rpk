import { z } from 'zod';

export const ExpenseScalarFieldEnumSchema = z.enum([
  'id',
  'date',
  'companyId',
  'category',
  'amount',
  'description',
  'createdAt',
  'updatedAt',
]);
