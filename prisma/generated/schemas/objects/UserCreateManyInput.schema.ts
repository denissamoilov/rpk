import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    name: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    image: z.string().optional().nullable(),
    role: z.lazy(() => RoleSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    agreedToTerms: z.boolean().optional(),
    requestToken: z.string().optional().nullable(),
    accessToken: z.string().optional().nullable(),
  })
  .strict();

export const UserCreateManyInputObjectSchema = Schema;
