import { z } from 'zod';
import { UserCreateNestedOneWithoutCompaniesInputObjectSchema } from './UserCreateNestedOneWithoutCompaniesInput.schema';
import { InvoiceCreateNestedManyWithoutCompanyInputObjectSchema } from './InvoiceCreateNestedManyWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyCreateWithoutExpensesInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    regNumber: z.string(),
    vatNumber: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutCompaniesInputObjectSchema),
    invoices: z
      .lazy(() => InvoiceCreateNestedManyWithoutCompanyInputObjectSchema)
      .optional(),
  })
  .strict();

export const CompanyCreateWithoutExpensesInputObjectSchema = Schema;
