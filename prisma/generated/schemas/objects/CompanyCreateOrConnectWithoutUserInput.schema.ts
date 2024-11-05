import { z } from 'zod';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyCreateWithoutUserInputObjectSchema } from './CompanyCreateWithoutUserInput.schema';
import { CompanyUncheckedCreateWithoutUserInputObjectSchema } from './CompanyUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => CompanyWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CompanyCreateWithoutUserInputObjectSchema),
      z.lazy(() => CompanyUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const CompanyCreateOrConnectWithoutUserInputObjectSchema = Schema;
