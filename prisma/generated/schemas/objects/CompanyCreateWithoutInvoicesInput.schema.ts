import { z } from 'zod';
import { UserCreateNestedOneWithoutCompaniesInputObjectSchema } from './UserCreateNestedOneWithoutCompaniesInput.schema';
import { ExpenseCreateNestedManyWithoutCompanyInputObjectSchema } from './ExpenseCreateNestedManyWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyCreateWithoutInvoicesInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    regNumber: z.string(),
    vatNumber: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutCompaniesInputObjectSchema),
    expenses: z
      .lazy(() => ExpenseCreateNestedManyWithoutCompanyInputObjectSchema)
      .optional(),
  })
  .strict();

export const CompanyCreateWithoutInvoicesInputObjectSchema = Schema;
