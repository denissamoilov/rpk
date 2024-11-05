import { z } from 'zod';
import { InvoiceItemCreateWithoutInvoiceInputObjectSchema } from './InvoiceItemCreateWithoutInvoiceInput.schema';
import { InvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema } from './InvoiceItemUncheckedCreateWithoutInvoiceInput.schema';
import { InvoiceItemCreateOrConnectWithoutInvoiceInputObjectSchema } from './InvoiceItemCreateOrConnectWithoutInvoiceInput.schema';
import { InvoiceItemCreateManyInvoiceInputEnvelopeObjectSchema } from './InvoiceItemCreateManyInvoiceInputEnvelope.schema';
import { InvoiceItemWhereUniqueInputObjectSchema } from './InvoiceItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemCreateNestedManyWithoutInvoiceInput> =
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
      createMany: z
        .lazy(() => InvoiceItemCreateManyInvoiceInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InvoiceItemCreateNestedManyWithoutInvoiceInputObjectSchema =
  Schema;
