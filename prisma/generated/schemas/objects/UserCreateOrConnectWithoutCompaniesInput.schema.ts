import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCompaniesInputObjectSchema } from './UserCreateWithoutCompaniesInput.schema';
import { UserUncheckedCreateWithoutCompaniesInputObjectSchema } from './UserUncheckedCreateWithoutCompaniesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutCompaniesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutCompaniesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutCompaniesInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutCompaniesInputObjectSchema = Schema;
