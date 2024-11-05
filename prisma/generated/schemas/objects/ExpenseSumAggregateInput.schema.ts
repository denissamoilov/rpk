import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseSumAggregateInputType> = z
  .object({
    amount: z.literal(true).optional(),
  })
  .strict();

export const ExpenseSumAggregateInputObjectSchema = Schema;
