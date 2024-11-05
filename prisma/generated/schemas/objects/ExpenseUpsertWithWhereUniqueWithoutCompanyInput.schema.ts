import { z } from 'zod';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';
import { ExpenseUpdateWithoutCompanyInputObjectSchema } from './ExpenseUpdateWithoutCompanyInput.schema';
import { ExpenseUncheckedUpdateWithoutCompanyInputObjectSchema } from './ExpenseUncheckedUpdateWithoutCompanyInput.schema';
import { ExpenseCreateWithoutCompanyInputObjectSchema } from './ExpenseCreateWithoutCompanyInput.schema';
import { ExpenseUncheckedCreateWithoutCompanyInputObjectSchema } from './ExpenseUncheckedCreateWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUpsertWithWhereUniqueWithoutCompanyInput> =
  z
    .object({
      where: z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExpenseUpdateWithoutCompanyInputObjectSchema),
        z.lazy(() => ExpenseUncheckedUpdateWithoutCompanyInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ExpenseCreateWithoutCompanyInputObjectSchema),
        z.lazy(() => ExpenseUncheckedCreateWithoutCompanyInputObjectSchema),
      ]),
    })
    .strict();

export const ExpenseUpsertWithWhereUniqueWithoutCompanyInputObjectSchema =
  Schema;
