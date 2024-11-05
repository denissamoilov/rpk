import { z } from 'zod';
import { InvoiceUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './InvoiceUncheckedCreateNestedManyWithoutCompanyInput.schema';
import { ExpenseUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './ExpenseUncheckedCreateNestedManyWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    regNumber: z.string(),
    vatNumber: z.string().optional().nullable(),
    userId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    invoices: z
      .lazy(
        () => InvoiceUncheckedCreateNestedManyWithoutCompanyInputObjectSchema,
      )
      .optional(),
    expenses: z
      .lazy(
        () => ExpenseUncheckedCreateNestedManyWithoutCompanyInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const CompanyUncheckedCreateInputObjectSchema = Schema;
