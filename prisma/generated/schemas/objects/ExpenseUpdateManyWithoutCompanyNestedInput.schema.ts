import { z } from 'zod';
import { ExpenseCreateWithoutCompanyInputObjectSchema } from './ExpenseCreateWithoutCompanyInput.schema';
import { ExpenseUncheckedCreateWithoutCompanyInputObjectSchema } from './ExpenseUncheckedCreateWithoutCompanyInput.schema';
import { ExpenseCreateOrConnectWithoutCompanyInputObjectSchema } from './ExpenseCreateOrConnectWithoutCompanyInput.schema';
import { ExpenseUpsertWithWhereUniqueWithoutCompanyInputObjectSchema } from './ExpenseUpsertWithWhereUniqueWithoutCompanyInput.schema';
import { ExpenseCreateManyCompanyInputEnvelopeObjectSchema } from './ExpenseCreateManyCompanyInputEnvelope.schema';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';
import { ExpenseUpdateWithWhereUniqueWithoutCompanyInputObjectSchema } from './ExpenseUpdateWithWhereUniqueWithoutCompanyInput.schema';
import { ExpenseUpdateManyWithWhereWithoutCompanyInputObjectSchema } from './ExpenseUpdateManyWithWhereWithoutCompanyInput.schema';
import { ExpenseScalarWhereInputObjectSchema } from './ExpenseScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUpdateManyWithoutCompanyNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ExpenseCreateWithoutCompanyInputObjectSchema),
        z.lazy(() => ExpenseCreateWithoutCompanyInputObjectSchema).array(),
        z.lazy(() => ExpenseUncheckedCreateWithoutCompanyInputObjectSchema),
        z
          .lazy(() => ExpenseUncheckedCreateWithoutCompanyInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ExpenseCreateOrConnectWithoutCompanyInputObjectSchema),
        z
          .lazy(() => ExpenseCreateOrConnectWithoutCompanyInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ExpenseUpsertWithWhereUniqueWithoutCompanyInputObjectSchema,
        ),
        z
          .lazy(
            () => ExpenseUpsertWithWhereUniqueWithoutCompanyInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ExpenseCreateManyCompanyInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ExpenseUpdateWithWhereUniqueWithoutCompanyInputObjectSchema,
        ),
        z
          .lazy(
            () => ExpenseUpdateWithWhereUniqueWithoutCompanyInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ExpenseUpdateManyWithWhereWithoutCompanyInputObjectSchema),
        z
          .lazy(() => ExpenseUpdateManyWithWhereWithoutCompanyInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ExpenseScalarWhereInputObjectSchema),
        z.lazy(() => ExpenseScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ExpenseUpdateManyWithoutCompanyNestedInputObjectSchema = Schema;
