import { z } from 'zod';
import { InvoiceItemWhereUniqueInputObjectSchema } from './InvoiceItemWhereUniqueInput.schema';
import { InvoiceItemUpdateWithoutInvoiceInputObjectSchema } from './InvoiceItemUpdateWithoutInvoiceInput.schema';
import { InvoiceItemUncheckedUpdateWithoutInvoiceInputObjectSchema } from './InvoiceItemUncheckedUpdateWithoutInvoiceInput.schema';
import { InvoiceItemCreateWithoutInvoiceInputObjectSchema } from './InvoiceItemCreateWithoutInvoiceInput.schema';
import { InvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema } from './InvoiceItemUncheckedCreateWithoutInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput> =
  z
    .object({
      where: z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => InvoiceItemUpdateWithoutInvoiceInputObjectSchema),
        z.lazy(() => InvoiceItemUncheckedUpdateWithoutInvoiceInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => InvoiceItemCreateWithoutInvoiceInputObjectSchema),
        z.lazy(() => InvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema),
      ]),
    })
    .strict();

export const InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema =
  Schema;
