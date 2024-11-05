import { z } from 'zod';
import { ExpenseCategorySchema } from '../enums/ExpenseCategory.schema';
import { NestedEnumExpenseCategoryWithAggregatesFilterObjectSchema } from './NestedEnumExpenseCategoryWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumExpenseCategoryFilterObjectSchema } from './NestedEnumExpenseCategoryFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumExpenseCategoryWithAggregatesFilter> = z
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
        z.lazy(() => NestedEnumExpenseCategoryWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumExpenseCategoryFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumExpenseCategoryFilterObjectSchema).optional(),
  })
  .strict();

export const EnumExpenseCategoryWithAggregatesFilterObjectSchema = Schema;
