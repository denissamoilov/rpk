import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemUncheckedCreateWithoutInvoiceInput> =
  z
    .object({
      id: z.string().optional(),
      description: z.string(),
      quantity: z.number(),
      unitPrice: z.number(),
      amount: z.number(),
    })
    .strict();

export const InvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema = Schema;
