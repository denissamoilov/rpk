import { z } from 'zod';

export const ExpenseCategorySchema = z.enum([
  'OFFICE',
  'TRAVEL',
  'EQUIPMENT',
  'SALARY',
  'TAX',
  'OTHER',
]);
