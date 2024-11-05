import { z } from 'zod';
import { CompanyScalarWhereInputObjectSchema } from './CompanyScalarWhereInput.schema';
import { CompanyUpdateManyMutationInputObjectSchema } from './CompanyUpdateManyMutationInput.schema';
import { CompanyUncheckedUpdateManyWithoutCompaniesInputObjectSchema } from './CompanyUncheckedUpdateManyWithoutCompaniesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => CompanyScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => CompanyUpdateManyMutationInputObjectSchema),
      z.lazy(() => CompanyUncheckedUpdateManyWithoutCompaniesInputObjectSchema),
    ]),
  })
  .strict();

export const CompanyUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
