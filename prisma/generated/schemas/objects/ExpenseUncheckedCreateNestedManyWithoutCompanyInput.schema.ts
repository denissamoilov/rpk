import { z } from 'zod';
import { ExpenseCreateWithoutCompanyInputObjectSchema } from './ExpenseCreateWithoutCompanyInput.schema';
import { ExpenseUncheckedCreateWithoutCompanyInputObjectSchema } from './ExpenseUncheckedCreateWithoutCompanyInput.schema';
import { ExpenseCreateOrConnectWithoutCompanyInputObjectSchema } from './ExpenseCreateOrConnectWithoutCompanyInput.schema';
import { ExpenseCreateManyCompanyInputEnvelopeObjectSchema } from './ExpenseCreateManyCompanyInputEnvelope.schema';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUncheckedCreateNestedManyWithoutCompanyInput> =
  z
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
      createMany: z
        .lazy(() => ExpenseCreateManyCompanyInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
          z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExpenseUncheckedCreateNestedManyWithoutCompanyInputObjectSchema =
  Schema;
