import { z } from 'zod';

export const InvoiceItemScalarFieldEnumSchema = z.enum([
  'id',
  'invoiceId',
  'description',
  'quantity',
  'unitPrice',
  'amount',
]);
