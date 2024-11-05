import { z } from 'zod';
import { InvoiceCreateNestedOneWithoutItemsInputObjectSchema } from './InvoiceCreateNestedOneWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemCreateInput> = z
  .object({
    id: z.string().optional(),
    description: z.string(),
    quantity: z.number(),
    unitPrice: z.number(),
    amount: z.number(),
    invoice: z.lazy(() => InvoiceCreateNestedOneWithoutItemsInputObjectSchema),
  })
  .strict();

export const InvoiceItemCreateInputObjectSchema = Schema;
