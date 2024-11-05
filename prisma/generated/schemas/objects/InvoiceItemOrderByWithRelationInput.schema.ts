import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { InvoiceOrderByWithRelationInputObjectSchema } from './InvoiceOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    invoiceId: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    unitPrice: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    invoice: z
      .lazy(() => InvoiceOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const InvoiceItemOrderByWithRelationInputObjectSchema = Schema;
