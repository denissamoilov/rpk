import { z } from 'zod';
import { ExpenseCreateManyCompanyInputObjectSchema } from './ExpenseCreateManyCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseCreateManyCompanyInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ExpenseCreateManyCompanyInputObjectSchema),
      z.lazy(() => ExpenseCreateManyCompanyInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ExpenseCreateManyCompanyInputEnvelopeObjectSchema = Schema;
