import { z } from 'zod';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyCreateWithoutExpensesInputObjectSchema } from './CompanyCreateWithoutExpensesInput.schema';
import { CompanyUncheckedCreateWithoutExpensesInputObjectSchema } from './CompanyUncheckedCreateWithoutExpensesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutExpensesInput> = z
  .object({
    where: z.lazy(() => CompanyWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CompanyCreateWithoutExpensesInputObjectSchema),
      z.lazy(() => CompanyUncheckedCreateWithoutExpensesInputObjectSchema),
    ]),
  })
  .strict();

export const CompanyCreateOrConnectWithoutExpensesInputObjectSchema = Schema;
