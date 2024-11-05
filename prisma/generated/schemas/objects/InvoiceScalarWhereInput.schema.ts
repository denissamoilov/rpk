import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { EnumInvoiceStatusFilterObjectSchema } from './EnumInvoiceStatusFilter.schema';
import { InvoiceStatusSchema } from '../enums/InvoiceStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InvoiceScalarWhereInputObjectSchema),
        z.lazy(() => InvoiceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InvoiceScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InvoiceScalarWhereInputObjectSchema),
        z.lazy(() => InvoiceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    number: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    dueDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    companyId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    totalAmount: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumInvoiceStatusFilterObjectSchema),
        z.lazy(() => InvoiceStatusSchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const InvoiceScalarWhereInputObjectSchema = Schema;
