import { z } from 'zod';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyUpdateWithoutUserInputObjectSchema } from './CompanyUpdateWithoutUserInput.schema';
import { CompanyUncheckedUpdateWithoutUserInputObjectSchema } from './CompanyUncheckedUpdateWithoutUserInput.schema';
import { CompanyCreateWithoutUserInputObjectSchema } from './CompanyCreateWithoutUserInput.schema';
import { CompanyUncheckedCreateWithoutUserInputObjectSchema } from './CompanyUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => CompanyWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => CompanyUpdateWithoutUserInputObjectSchema),
      z.lazy(() => CompanyUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CompanyCreateWithoutUserInputObjectSchema),
      z.lazy(() => CompanyUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const CompanyUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
