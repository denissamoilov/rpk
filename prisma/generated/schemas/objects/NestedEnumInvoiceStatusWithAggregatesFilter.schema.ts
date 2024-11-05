import { z } from 'zod';
import { InvoiceStatusSchema } from '../enums/InvoiceStatus.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumInvoiceStatusFilterObjectSchema } from './NestedEnumInvoiceStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumInvoiceStatusWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => InvoiceStatusSchema).optional(),
    in: z
      .union([
        z.lazy(() => InvoiceStatusSchema).array(),
        z.lazy(() => InvoiceStatusSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => InvoiceStatusSchema).array(),
        z.lazy(() => InvoiceStatusSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => InvoiceStatusSchema),
        z.lazy(() => NestedEnumInvoiceStatusWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumInvoiceStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumInvoiceStatusFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumInvoiceStatusWithAggregatesFilterObjectSchema = Schema;
