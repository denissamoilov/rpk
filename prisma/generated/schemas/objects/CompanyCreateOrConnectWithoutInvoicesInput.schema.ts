import { z } from 'zod';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyCreateWithoutInvoicesInputObjectSchema } from './CompanyCreateWithoutInvoicesInput.schema';
import { CompanyUncheckedCreateWithoutInvoicesInputObjectSchema } from './CompanyUncheckedCreateWithoutInvoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutInvoicesInput> = z
  .object({
    where: z.lazy(() => CompanyWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CompanyCreateWithoutInvoicesInputObjectSchema),
      z.lazy(() => CompanyUncheckedCreateWithoutInvoicesInputObjectSchema),
    ]),
  })
  .strict();

export const CompanyCreateOrConnectWithoutInvoicesInputObjectSchema = Schema;
