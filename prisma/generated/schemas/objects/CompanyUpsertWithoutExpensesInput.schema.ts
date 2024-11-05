import { z } from 'zod';
import { CompanyUpdateWithoutExpensesInputObjectSchema } from './CompanyUpdateWithoutExpensesInput.schema';
import { CompanyUncheckedUpdateWithoutExpensesInputObjectSchema } from './CompanyUncheckedUpdateWithoutExpensesInput.schema';
import { CompanyCreateWithoutExpensesInputObjectSchema } from './CompanyCreateWithoutExpensesInput.schema';
import { CompanyUncheckedCreateWithoutExpensesInputObjectSchema } from './CompanyUncheckedCreateWithoutExpensesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUpsertWithoutExpensesInput> = z
  .object({
    update: z.union([
      z.lazy(() => CompanyUpdateWithoutExpensesInputObjectSchema),
      z.lazy(() => CompanyUncheckedUpdateWithoutExpensesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CompanyCreateWithoutExpensesInputObjectSchema),
      z.lazy(() => CompanyUncheckedCreateWithoutExpensesInputObjectSchema),
    ]),
  })
  .strict();

export const CompanyUpsertWithoutExpensesInputObjectSchema = Schema;
