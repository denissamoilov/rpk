import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    invoiceId: z.string(),
    description: z.string(),
    quantity: z.number(),
    unitPrice: z.number(),
    amount: z.number(),
  })
  .strict();

export const InvoiceItemUncheckedCreateInputObjectSchema = Schema;
