import { z } from 'zod';
import { CompanyCreateWithoutExpensesInputObjectSchema } from './CompanyCreateWithoutExpensesInput.schema';
import { CompanyUncheckedCreateWithoutExpensesInputObjectSchema } from './CompanyUncheckedCreateWithoutExpensesInput.schema';
import { CompanyCreateOrConnectWithoutExpensesInputObjectSchema } from './CompanyCreateOrConnectWithoutExpensesInput.schema';
import { CompanyUpsertWithoutExpensesInputObjectSchema } from './CompanyUpsertWithoutExpensesInput.schema';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyUpdateWithoutExpensesInputObjectSchema } from './CompanyUpdateWithoutExpensesInput.schema';
import { CompanyUncheckedUpdateWithoutExpensesInputObjectSchema } from './CompanyUncheckedUpdateWithoutExpensesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutExpensesNestedInput> =
  z
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
      upsert: z
        .lazy(() => CompanyUpsertWithoutExpensesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CompanyWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CompanyUpdateWithoutExpensesInputObjectSchema),
          z.lazy(() => CompanyUncheckedUpdateWithoutExpensesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const CompanyUpdateOneRequiredWithoutExpensesNestedInputObjectSchema =
  Schema;
