import { z } from 'zod';
import { InvoiceUpdateWithoutItemsInputObjectSchema } from './InvoiceUpdateWithoutItemsInput.schema';
import { InvoiceUncheckedUpdateWithoutItemsInputObjectSchema } from './InvoiceUncheckedUpdateWithoutItemsInput.schema';
import { InvoiceCreateWithoutItemsInputObjectSchema } from './InvoiceCreateWithoutItemsInput.schema';
import { InvoiceUncheckedCreateWithoutItemsInputObjectSchema } from './InvoiceUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpsertWithoutItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => InvoiceUpdateWithoutItemsInputObjectSchema),
      z.lazy(() => InvoiceUncheckedUpdateWithoutItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => InvoiceCreateWithoutItemsInputObjectSchema),
      z.lazy(() => InvoiceUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const InvoiceUpsertWithoutItemsInputObjectSchema = Schema;
