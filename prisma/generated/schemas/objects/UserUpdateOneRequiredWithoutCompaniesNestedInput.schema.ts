import { z } from 'zod';
import { UserCreateWithoutCompaniesInputObjectSchema } from './UserCreateWithoutCompaniesInput.schema';
import { UserUncheckedCreateWithoutCompaniesInputObjectSchema } from './UserUncheckedCreateWithoutCompaniesInput.schema';
import { UserCreateOrConnectWithoutCompaniesInputObjectSchema } from './UserCreateOrConnectWithoutCompaniesInput.schema';
import { UserUpsertWithoutCompaniesInputObjectSchema } from './UserUpsertWithoutCompaniesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutCompaniesInputObjectSchema } from './UserUpdateWithoutCompaniesInput.schema';
import { UserUncheckedUpdateWithoutCompaniesInputObjectSchema } from './UserUncheckedUpdateWithoutCompaniesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCompaniesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutCompaniesInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutCompaniesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutCompaniesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutCompaniesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutCompaniesInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutCompaniesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutCompaniesNestedInputObjectSchema =
  Schema;
