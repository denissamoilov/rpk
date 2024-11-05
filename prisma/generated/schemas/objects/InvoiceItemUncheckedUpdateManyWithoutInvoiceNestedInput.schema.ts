import { z } from 'zod';
import { InvoiceItemCreateWithoutInvoiceInputObjectSchema } from './InvoiceItemCreateWithoutInvoiceInput.schema';
import { InvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema } from './InvoiceItemUncheckedCreateWithoutInvoiceInput.schema';
import { InvoiceItemCreateOrConnectWithoutInvoiceInputObjectSchema } from './InvoiceItemCreateOrConnectWithoutInvoiceInput.schema';
import { InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema } from './InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput.schema';
import { InvoiceItemCreateManyInvoiceInputEnvelopeObjectSchema } from './InvoiceItemCreateManyInvoiceInputEnvelope.schema';
import { InvoiceItemWhereUniqueInputObjectSchema } from './InvoiceItemWhereUniqueInput.schema';
import { InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema } from './InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput.schema';
import { InvoiceItemUpdateManyWithWhereWithoutInvoiceInputObjectSchema } from './InvoiceItemUpdateManyWithWhereWithoutInvoiceInput.schema';
import { InvoiceItemScalarWhereInputObjectSchema } from './InvoiceItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InvoiceItemCreateWithoutInvoiceInputObjectSchema),
          z
            .lazy(() => InvoiceItemCreateWithoutInvoiceInputObjectSchema)
            .array(),
          z.lazy(
            () => InvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema,
          ),
          z
            .lazy(
              () => InvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => InvoiceItemCreateOrConnectWithoutInvoiceInputObjectSchema,
          ),
          z
            .lazy(
              () => InvoiceItemCreateOrConnectWithoutInvoiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => InvoiceItemCreateManyInvoiceInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => InvoiceItemUpdateManyWithWhereWithoutInvoiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InvoiceItemUpdateManyWithWhereWithoutInvoiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => InvoiceItemScalarWhereInputObjectSchema),
          z.lazy(() => InvoiceItemScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInputObjectSchema =
  Schema;
