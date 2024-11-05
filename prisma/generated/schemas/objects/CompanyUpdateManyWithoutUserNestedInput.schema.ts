import { z } from 'zod';
import { CompanyCreateWithoutUserInputObjectSchema } from './CompanyCreateWithoutUserInput.schema';
import { CompanyUncheckedCreateWithoutUserInputObjectSchema } from './CompanyUncheckedCreateWithoutUserInput.schema';
import { CompanyCreateOrConnectWithoutUserInputObjectSchema } from './CompanyCreateOrConnectWithoutUserInput.schema';
import { CompanyUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './CompanyUpsertWithWhereUniqueWithoutUserInput.schema';
import { CompanyCreateManyUserInputEnvelopeObjectSchema } from './CompanyCreateManyUserInputEnvelope.schema';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './CompanyUpdateWithWhereUniqueWithoutUserInput.schema';
import { CompanyUpdateManyWithWhereWithoutUserInputObjectSchema } from './CompanyUpdateManyWithWhereWithoutUserInput.schema';
import { CompanyScalarWhereInputObjectSchema } from './CompanyScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUpdateManyWithoutUserNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => CompanyUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => CompanyUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => CompanyCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => CompanyWhereUniqueInputObjectSchema),
        z.lazy(() => CompanyWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => CompanyWhereUniqueInputObjectSchema),
        z.lazy(() => CompanyWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => CompanyWhereUniqueInputObjectSchema),
        z.lazy(() => CompanyWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => CompanyWhereUniqueInputObjectSchema),
        z.lazy(() => CompanyWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => CompanyUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => CompanyUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => CompanyUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => CompanyUpdateManyWithWhereWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => CompanyScalarWhereInputObjectSchema),
        z.lazy(() => CompanyScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const CompanyUpdateManyWithoutUserNestedInputObjectSchema = Schema;
