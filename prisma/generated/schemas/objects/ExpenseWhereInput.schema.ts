import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumExpenseCategoryFilterObjectSchema } from './EnumExpenseCategoryFilter.schema';
import { ExpenseCategorySchema } from '../enums/ExpenseCategory.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { CompanyRelationFilterObjectSchema } from './CompanyRelationFilter.schema';
import { CompanyWhereInputObjectSchema } from './CompanyWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExpenseWhereInputObjectSchema),
        z.lazy(() => ExpenseWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExpenseWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExpenseWhereInputObjectSchema),
        z.lazy(() => ExpenseWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    companyId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    category: z
      .union([
        z.lazy(() => EnumExpenseCategoryFilterObjectSchema),
        z.lazy(() => ExpenseCategorySchema),
      ])
      .optional(),
    amount: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
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
  })
  .strict();

export const ExpenseWhereInputObjectSchema = Schema;
