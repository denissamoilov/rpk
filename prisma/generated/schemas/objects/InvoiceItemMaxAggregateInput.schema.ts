import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    invoiceId: z.literal(true).optional(),
    description: z.literal(true).optional(),
    quantity: z.literal(true).optional(),
    unitPrice: z.literal(true).optional(),
    amount: z.literal(true).optional(),
  })
  .strict();

export const InvoiceItemMaxAggregateInputObjectSchema = Schema;
