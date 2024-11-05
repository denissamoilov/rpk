import { z } from 'zod';
import { InvoiceUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './InvoiceUncheckedCreateNestedManyWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutExpensesInput> = z
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
  })
  .strict();

export const CompanyUncheckedCreateWithoutExpensesInputObjectSchema = Schema;
