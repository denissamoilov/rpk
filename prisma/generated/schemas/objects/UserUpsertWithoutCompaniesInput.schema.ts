import { z } from 'zod';
import { UserUpdateWithoutCompaniesInputObjectSchema } from './UserUpdateWithoutCompaniesInput.schema';
import { UserUncheckedUpdateWithoutCompaniesInputObjectSchema } from './UserUncheckedUpdateWithoutCompaniesInput.schema';
import { UserCreateWithoutCompaniesInputObjectSchema } from './UserCreateWithoutCompaniesInput.schema';
import { UserUncheckedCreateWithoutCompaniesInputObjectSchema } from './UserUncheckedCreateWithoutCompaniesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutCompaniesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutCompaniesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutCompaniesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutCompaniesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutCompaniesInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutCompaniesInputObjectSchema = Schema;
