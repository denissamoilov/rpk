import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ExpenseCountOrderByAggregateInputObjectSchema } from './ExpenseCountOrderByAggregateInput.schema';
import { ExpenseAvgOrderByAggregateInputObjectSchema } from './ExpenseAvgOrderByAggregateInput.schema';
import { ExpenseMaxOrderByAggregateInputObjectSchema } from './ExpenseMaxOrderByAggregateInput.schema';
import { ExpenseMinOrderByAggregateInputObjectSchema } from './ExpenseMinOrderByAggregateInput.schema';
import { ExpenseSumOrderByAggregateInputObjectSchema } from './ExpenseSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    companyId: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ExpenseCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ExpenseAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ExpenseMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ExpenseMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ExpenseSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ExpenseOrderByWithAggregationInputObjectSchema = Schema;
