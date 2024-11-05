import { z } from 'zod';
import { InvoiceStatusSchema } from '../enums/InvoiceStatus.schema';
import { NestedEnumInvoiceStatusFilterObjectSchema } from './NestedEnumInvoiceStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumInvoiceStatusFilter> = z
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
        z.lazy(() => NestedEnumInvoiceStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumInvoiceStatusFilterObjectSchema = Schema;
