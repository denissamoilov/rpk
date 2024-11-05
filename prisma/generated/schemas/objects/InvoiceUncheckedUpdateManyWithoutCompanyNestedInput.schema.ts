import { z } from 'zod';
import { InvoiceCreateWithoutCompanyInputObjectSchema } from './InvoiceCreateWithoutCompanyInput.schema';
import { InvoiceUncheckedCreateWithoutCompanyInputObjectSchema } from './InvoiceUncheckedCreateWithoutCompanyInput.schema';
import { InvoiceCreateOrConnectWithoutCompanyInputObjectSchema } from './InvoiceCreateOrConnectWithoutCompanyInput.schema';
import { InvoiceUpsertWithWhereUniqueWithoutCompanyInputObjectSchema } from './InvoiceUpsertWithWhereUniqueWithoutCompanyInput.schema';
import { InvoiceCreateManyCompanyInputEnvelopeObjectSchema } from './InvoiceCreateManyCompanyInputEnvelope.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithWhereUniqueWithoutCompanyInputObjectSchema } from './InvoiceUpdateWithWhereUniqueWithoutCompanyInput.schema';
import { InvoiceUpdateManyWithWhereWithoutCompanyInputObjectSchema } from './InvoiceUpdateManyWithWhereWithoutCompanyInput.schema';
import { InvoiceScalarWhereInputObjectSchema } from './InvoiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUncheckedUpdateManyWithoutCompanyNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InvoiceCreateWithoutCompanyInputObjectSchema),
          z.lazy(() => InvoiceCreateWithoutCompanyInputObjectSchema).array(),
          z.lazy(() => InvoiceUncheckedCreateWithoutCompanyInputObjectSchema),
          z
            .lazy(() => InvoiceUncheckedCreateWithoutCompanyInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => InvoiceCreateOrConnectWithoutCompanyInputObjectSchema),
          z
            .lazy(() => InvoiceCreateOrConnectWithoutCompanyInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => InvoiceUpsertWithWhereUniqueWithoutCompanyInputObjectSchema,
          ),
          z
            .lazy(
              () => InvoiceUpsertWithWhereUniqueWithoutCompanyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => InvoiceCreateManyCompanyInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => InvoiceUpdateWithWhereUniqueWithoutCompanyInputObjectSchema,
          ),
          z
            .lazy(
              () => InvoiceUpdateWithWhereUniqueWithoutCompanyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => InvoiceUpdateManyWithWhereWithoutCompanyInputObjectSchema,
          ),
          z
            .lazy(
              () => InvoiceUpdateManyWithWhereWithoutCompanyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => InvoiceScalarWhereInputObjectSchema),
          z.lazy(() => InvoiceScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InvoiceUncheckedUpdateManyWithoutCompanyNestedInputObjectSchema =
  Schema;
