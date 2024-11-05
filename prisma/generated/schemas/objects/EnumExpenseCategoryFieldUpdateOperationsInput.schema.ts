import { z } from 'zod';
import { ExpenseCategorySchema } from '../enums/ExpenseCategory.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumExpenseCategoryFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => ExpenseCategorySchema).optional(),
    })
    .strict();

export const EnumExpenseCategoryFieldUpdateOperationsInputObjectSchema = Schema;
