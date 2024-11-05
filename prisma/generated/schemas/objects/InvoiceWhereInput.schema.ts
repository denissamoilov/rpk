import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { EnumInvoiceStatusFilterObjectSchema } from './EnumInvoiceStatusFilter.schema';
import { InvoiceStatusSchema } from '../enums/InvoiceStatus.schema';
import { CompanyRelationFilterObjectSchema } from './CompanyRelationFilter.schema';
import { CompanyWhereInputObjectSchema } from './CompanyWhereInput.schema';
import { InvoiceItemListRelationFilterObjectSchema } from './InvoiceItemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InvoiceWhereInputObjectSchema),
        z.lazy(() => InvoiceWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InvoiceWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InvoiceWhereInputObjectSchema),
        z.lazy(() => InvoiceWhereInputObjectSchema).array(),
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
    company: z
      .union([
        z.lazy(() => CompanyRelationFilterObjectSchema),
        z.lazy(() => CompanyWhereInputObjectSchema),
      ])
      .optional(),
    items: z.lazy(() => InvoiceItemListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const InvoiceWhereInputObjectSchema = Schema;
