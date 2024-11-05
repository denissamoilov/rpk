import { z } from 'zod';
import { ExpenseUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './ExpenseUncheckedCreateNestedManyWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutInvoicesInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    regNumber: z.string(),
    vatNumber: z.string().optional().nullable(),
    userId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    expenses: z
      .lazy(
        () => ExpenseUncheckedCreateNestedManyWithoutCompanyInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const CompanyUncheckedCreateWithoutInvoicesInputObjectSchema = Schema;
