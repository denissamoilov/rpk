import { z } from 'zod';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyUpdateWithoutUserInputObjectSchema } from './CompanyUpdateWithoutUserInput.schema';
import { CompanyUncheckedUpdateWithoutUserInputObjectSchema } from './CompanyUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => CompanyWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => CompanyUpdateWithoutUserInputObjectSchema),
      z.lazy(() => CompanyUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const CompanyUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
