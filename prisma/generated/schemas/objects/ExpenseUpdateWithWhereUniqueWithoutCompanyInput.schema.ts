import { z } from 'zod';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';
import { ExpenseUpdateWithoutCompanyInputObjectSchema } from './ExpenseUpdateWithoutCompanyInput.schema';
import { ExpenseUncheckedUpdateWithoutCompanyInputObjectSchema } from './ExpenseUncheckedUpdateWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUpdateWithWhereUniqueWithoutCompanyInput> =
  z
    .object({
      where: z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExpenseUpdateWithoutCompanyInputObjectSchema),
        z.lazy(() => ExpenseUncheckedUpdateWithoutCompanyInputObjectSchema),
      ]),
    })
    .strict();

export const ExpenseUpdateWithWhereUniqueWithoutCompanyInputObjectSchema =
  Schema;
