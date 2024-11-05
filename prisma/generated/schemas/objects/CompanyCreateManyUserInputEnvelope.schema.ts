import { z } from 'zod';
import { CompanyCreateManyUserInputObjectSchema } from './CompanyCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => CompanyCreateManyUserInputObjectSchema),
      z.lazy(() => CompanyCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const CompanyCreateManyUserInputEnvelopeObjectSchema = Schema;
