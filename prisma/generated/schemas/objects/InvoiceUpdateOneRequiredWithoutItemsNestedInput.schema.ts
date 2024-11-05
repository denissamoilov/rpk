import { z } from 'zod';
import { InvoiceCreateWithoutItemsInputObjectSchema } from './InvoiceCreateWithoutItemsInput.schema';
import { InvoiceUncheckedCreateWithoutItemsInputObjectSchema } from './InvoiceUncheckedCreateWithoutItemsInput.schema';
import { InvoiceCreateOrConnectWithoutItemsInputObjectSchema } from './InvoiceCreateOrConnectWithoutItemsInput.schema';
import { InvoiceUpsertWithoutItemsInputObjectSchema } from './InvoiceUpsertWithoutItemsInput.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithoutItemsInputObjectSchema } from './InvoiceUpdateWithoutItemsInput.schema';
import { InvoiceUncheckedUpdateWithoutItemsInputObjectSchema } from './InvoiceUncheckedUpdateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpdateOneRequiredWithoutItemsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InvoiceCreateWithoutItemsInputObjectSchema),
          z.lazy(() => InvoiceUncheckedCreateWithoutItemsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => InvoiceCreateOrConnectWithoutItemsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => InvoiceUpsertWithoutItemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => InvoiceWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => InvoiceUpdateWithoutItemsInputObjectSchema),
          z.lazy(() => InvoiceUncheckedUpdateWithoutItemsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const InvoiceUpdateOneRequiredWithoutItemsNestedInputObjectSchema =
  Schema;
