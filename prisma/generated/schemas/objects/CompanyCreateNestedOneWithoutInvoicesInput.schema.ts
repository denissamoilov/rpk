import { z } from 'zod';
import { CompanyCreateWithoutInvoicesInputObjectSchema } from './CompanyCreateWithoutInvoicesInput.schema';
import { CompanyUncheckedCreateWithoutInvoicesInputObjectSchema } from './CompanyUncheckedCreateWithoutInvoicesInput.schema';
import { CompanyCreateOrConnectWithoutInvoicesInputObjectSchema } from './CompanyCreateOrConnectWithoutInvoicesInput.schema';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutInvoicesInput> = z
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
    connect: z.lazy(() => CompanyWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CompanyCreateNestedOneWithoutInvoicesInputObjectSchema = Schema;
