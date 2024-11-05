import { z } from 'zod';
import { InvoiceItemWhereUniqueInputObjectSchema } from './InvoiceItemWhereUniqueInput.schema';
import { InvoiceItemCreateWithoutInvoiceInputObjectSchema } from './InvoiceItemCreateWithoutInvoiceInput.schema';
import { InvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema } from './InvoiceItemUncheckedCreateWithoutInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemCreateOrConnectWithoutInvoiceInput> =
  z
    .object({
      where: z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => InvoiceItemCreateWithoutInvoiceInputObjectSchema),
        z.lazy(() => InvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema),
      ]),
    })
    .strict();

export const InvoiceItemCreateOrConnectWithoutInvoiceInputObjectSchema = Schema;
