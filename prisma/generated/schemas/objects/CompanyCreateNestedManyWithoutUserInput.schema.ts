import { z } from 'zod';
import { CompanyCreateWithoutUserInputObjectSchema } from './CompanyCreateWithoutUserInput.schema';
import { CompanyUncheckedCreateWithoutUserInputObjectSchema } from './CompanyUncheckedCreateWithoutUserInput.schema';
import { CompanyCreateOrConnectWithoutUserInputObjectSchema } from './CompanyCreateOrConnectWithoutUserInput.schema';
import { CompanyCreateManyUserInputEnvelopeObjectSchema } from './CompanyCreateManyUserInputEnvelope.schema';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CompanyCreateWithoutUserInputObjectSchema),
        z.lazy(() => CompanyCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => CompanyUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => CompanyUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => CompanyCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => CompanyCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => CompanyCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => CompanyWhereUniqueInputObjectSchema),
        z.lazy(() => CompanyWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const CompanyCreateNestedManyWithoutUserInputObjectSchema = Schema;
