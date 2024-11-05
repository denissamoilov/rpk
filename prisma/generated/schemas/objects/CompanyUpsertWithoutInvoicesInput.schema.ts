import { z } from 'zod';
import { CompanyUpdateWithoutInvoicesInputObjectSchema } from './CompanyUpdateWithoutInvoicesInput.schema';
import { CompanyUncheckedUpdateWithoutInvoicesInputObjectSchema } from './CompanyUncheckedUpdateWithoutInvoicesInput.schema';
import { CompanyCreateWithoutInvoicesInputObjectSchema } from './CompanyCreateWithoutInvoicesInput.schema';
import { CompanyUncheckedCreateWithoutInvoicesInputObjectSchema } from './CompanyUncheckedCreateWithoutInvoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUpsertWithoutInvoicesInput> = z
  .object({
    update: z.union([
      z.lazy(() => CompanyUpdateWithoutInvoicesInputObjectSchema),
      z.lazy(() => CompanyUncheckedUpdateWithoutInvoicesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CompanyCreateWithoutInvoicesInputObjectSchema),
      z.lazy(() => CompanyUncheckedCreateWithoutInvoicesInputObjectSchema),
    ]),
  })
  .strict();

export const CompanyUpsertWithoutInvoicesInputObjectSchema = Schema;
