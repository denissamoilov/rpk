import { z } from 'zod';
import { InvoiceCreateWithoutItemsInputObjectSchema } from './InvoiceCreateWithoutItemsInput.schema';
import { InvoiceUncheckedCreateWithoutItemsInputObjectSchema } from './InvoiceUncheckedCreateWithoutItemsInput.schema';
import { InvoiceCreateOrConnectWithoutItemsInputObjectSchema } from './InvoiceCreateOrConnectWithoutItemsInput.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateNestedOneWithoutItemsInput> = z
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
    connect: z.lazy(() => InvoiceWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const InvoiceCreateNestedOneWithoutItemsInputObjectSchema = Schema;
