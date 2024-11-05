import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    regNumber: z.string(),
    vatNumber: z.string().optional().nullable(),
    userId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const CompanyCreateManyInputObjectSchema = Schema;
