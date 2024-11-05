import { z } from 'zod';
import { ExpenseCategorySchema } from '../enums/ExpenseCategory.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUncheckedCreateWithoutCompanyInput> = z
  .object({
    id: z.string().optional(),
    date: z.coerce.date(),
    category: z.lazy(() => ExpenseCategorySchema),
    amount: z.number(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const ExpenseUncheckedCreateWithoutCompanyInputObjectSchema = Schema;
