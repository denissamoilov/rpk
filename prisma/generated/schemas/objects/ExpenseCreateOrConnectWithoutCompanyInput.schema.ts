import { z } from 'zod';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';
import { ExpenseCreateWithoutCompanyInputObjectSchema } from './ExpenseCreateWithoutCompanyInput.schema';
import { ExpenseUncheckedCreateWithoutCompanyInputObjectSchema } from './ExpenseUncheckedCreateWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseCreateOrConnectWithoutCompanyInput> = z
  .object({
    where: z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ExpenseCreateWithoutCompanyInputObjectSchema),
      z.lazy(() => ExpenseUncheckedCreateWithoutCompanyInputObjectSchema),
    ]),
  })
  .strict();

export const ExpenseCreateOrConnectWithoutCompanyInputObjectSchema = Schema;
