import { z } from 'zod';
import { CompanyCreateWithoutExpensesInputObjectSchema } from './CompanyCreateWithoutExpensesInput.schema';
import { CompanyUncheckedCreateWithoutExpensesInputObjectSchema } from './CompanyUncheckedCreateWithoutExpensesInput.schema';
import { CompanyCreateOrConnectWithoutExpensesInputObjectSchema } from './CompanyCreateOrConnectWithoutExpensesInput.schema';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutExpensesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CompanyCreateWithoutExpensesInputObjectSchema),
        z.lazy(() => CompanyUncheckedCreateWithoutExpensesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CompanyCreateOrConnectWithoutExpensesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => CompanyWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CompanyCreateNestedOneWithoutExpensesInputObjectSchema = Schema;
