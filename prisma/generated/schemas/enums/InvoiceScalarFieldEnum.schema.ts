import { z } from 'zod';

export const InvoiceScalarFieldEnumSchema = z.enum([
  'id',
  'number',
  'date',
  'dueDate',
  'companyId',
  'totalAmount',
  'status',
  'createdAt',
  'updatedAt',
]);
