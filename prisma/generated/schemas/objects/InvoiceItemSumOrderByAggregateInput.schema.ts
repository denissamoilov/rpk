import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemSumOrderByAggregateInput> = z
  .object({
    quantity: z.lazy(() => SortOrderSchema).optional(),
    unitPrice: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const InvoiceItemSumOrderByAggregateInputObjectSchema = Schema;
