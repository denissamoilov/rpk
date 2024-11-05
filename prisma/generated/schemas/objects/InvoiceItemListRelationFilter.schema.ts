import { z } from 'zod';
import { InvoiceItemWhereInputObjectSchema } from './InvoiceItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemListRelationFilter> = z
  .object({
    every: z.lazy(() => InvoiceItemWhereInputObjectSchema).optional(),
    some: z.lazy(() => InvoiceItemWhereInputObjectSchema).optional(),
    none: z.lazy(() => InvoiceItemWhereInputObjectSchema).optional(),
  })
  .strict();

export const InvoiceItemListRelationFilterObjectSchema = Schema;
