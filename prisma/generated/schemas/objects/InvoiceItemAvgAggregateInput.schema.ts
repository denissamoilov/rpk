import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemAvgAggregateInputType> = z
  .object({
    quantity: z.literal(true).optional(),
    unitPrice: z.literal(true).optional(),
    amount: z.literal(true).optional(),
  })
  .strict();

export const InvoiceItemAvgAggregateInputObjectSchema = Schema;
