import { z } from 'zod';
import { InvoiceCreateNestedManyWithoutCompanyInputObjectSchema } from './InvoiceCreateNestedManyWithoutCompanyInput.schema';
import { ExpenseCreateNestedManyWithoutCompanyInputObjectSchema } from './ExpenseCreateNestedManyWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    regNumber: z.string(),
    vatNumber: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    invoices: z
      .lazy(() => InvoiceCreateNestedManyWithoutCompanyInputObjectSchema)
      .optional(),
    expenses: z
      .lazy(() => ExpenseCreateNestedManyWithoutCompanyInputObjectSchema)
      .optional(),
  })
  .strict();

export const CompanyCreateWithoutUserInputObjectSchema = Schema;
