import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { InvoiceListRelationFilterObjectSchema } from './InvoiceListRelationFilter.schema';
import { ExpenseListRelationFilterObjectSchema } from './ExpenseListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CompanyWhereInputObjectSchema),
        z.lazy(() => CompanyWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CompanyWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CompanyWhereInputObjectSchema),
        z.lazy(() => CompanyWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    regNumber: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    vatNumber: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    invoices: z.lazy(() => InvoiceListRelationFilterObjectSchema).optional(),
    expenses: z.lazy(() => ExpenseListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const CompanyWhereInputObjectSchema = Schema;
