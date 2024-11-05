import { z } from 'zod';
import { UserCreateWithoutCompaniesInputObjectSchema } from './UserCreateWithoutCompaniesInput.schema';
import { UserUncheckedCreateWithoutCompaniesInputObjectSchema } from './UserUncheckedCreateWithoutCompaniesInput.schema';
import { UserCreateOrConnectWithoutCompaniesInputObjectSchema } from './UserCreateOrConnectWithoutCompaniesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutCompaniesInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutCompaniesInputObjectSchema = Schema;
