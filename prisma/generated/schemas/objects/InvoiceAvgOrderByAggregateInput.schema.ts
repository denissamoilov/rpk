import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceAvgOrderByAggregateInput> = z
  .object({
    totalAmount: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const InvoiceAvgOrderByAggregateInputObjectSchema = Schema;
