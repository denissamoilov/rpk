import { z } from 'zod';
import { CompanyCreateWithoutInvoicesInputObjectSchema } from './CompanyCreateWithoutInvoicesInput.schema';
import { CompanyUncheckedCreateWithoutInvoicesInputObjectSchema } from './CompanyUncheckedCreateWithoutInvoicesInput.schema';
import { CompanyCreateOrConnectWithoutInvoicesInputObjectSchema } from './CompanyCreateOrConnectWithoutInvoicesInput.schema';
import { CompanyUpsertWithoutInvoicesInputObjectSchema } from './CompanyUpsertWithoutInvoicesInput.schema';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyUpdateWithoutInvoicesInputObjectSchema } from './CompanyUpdateWithoutInvoicesInput.schema';
import { CompanyUncheckedUpdateWithoutInvoicesInputObjectSchema } from './CompanyUncheckedUpdateWithoutInvoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutInvoicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CompanyCreateWithoutInvoicesInputObjectSchema),
          z.lazy(() => CompanyUncheckedCreateWithoutInvoicesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CompanyCreateOrConnectWithoutInvoicesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => CompanyUpsertWithoutInvoicesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CompanyWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CompanyUpdateWithoutInvoicesInputObjectSchema),
          z.lazy(() => CompanyUncheckedUpdateWithoutInvoicesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const CompanyUpdateOneRequiredWithoutInvoicesNestedInputObjectSchema =
  Schema;
