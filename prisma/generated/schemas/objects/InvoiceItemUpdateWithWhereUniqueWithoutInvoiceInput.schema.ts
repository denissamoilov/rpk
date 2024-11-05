import { z } from 'zod';
import { InvoiceItemWhereUniqueInputObjectSchema } from './InvoiceItemWhereUniqueInput.schema';
import { InvoiceItemUpdateWithoutInvoiceInputObjectSchema } from './InvoiceItemUpdateWithoutInvoiceInput.schema';
import { InvoiceItemUncheckedUpdateWithoutInvoiceInputObjectSchema } from './InvoiceItemUncheckedUpdateWithoutInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput> =
  z
    .object({
      where: z.lazy(() => InvoiceItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => InvoiceItemUpdateWithoutInvoiceInputObjectSchema),
        z.lazy(() => InvoiceItemUncheckedUpdateWithoutInvoiceInputObjectSchema),
      ]),
    })
    .strict();

export const InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema =
  Schema;
