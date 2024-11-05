import { z } from 'zod';
import { ExpenseCategorySchema } from '../enums/ExpenseCategory.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumExpenseCategoryFilter> = z
  .object({
    equals: z.lazy(() => ExpenseCategorySchema).optional(),
    in: z
      .union([
        z.lazy(() => ExpenseCategorySchema).array(),
        z.lazy(() => ExpenseCategorySchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => ExpenseCategorySchema).array(),
        z.lazy(() => ExpenseCategorySchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => ExpenseCategorySchema),
        z.lazy(() => NestedEnumExpenseCategoryFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumExpenseCategoryFilterObjectSchema = Schema;
