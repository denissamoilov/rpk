import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    regNumber: z.string().optional(),
  })
  .strict();

export const CompanyWhereUniqueInputObjectSchema = Schema;
