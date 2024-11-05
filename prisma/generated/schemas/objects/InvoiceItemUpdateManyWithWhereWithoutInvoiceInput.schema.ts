import { z } from 'zod';
import { InvoiceItemScalarWhereInputObjectSchema } from './InvoiceItemScalarWhereInput.schema';
import { InvoiceItemUpdateManyMutationInputObjectSchema } from './InvoiceItemUpdateManyMutationInput.schema';
import { InvoiceItemUncheckedUpdateManyWithoutItemsInputObjectSchema } from './InvoiceItemUncheckedUpdateManyWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemUpdateManyWithWhereWithoutInvoiceInput> =
  z
    .object({
      where: z.lazy(() => InvoiceItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => InvoiceItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => InvoiceItemUncheckedUpdateManyWithoutItemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InvoiceItemUpdateManyWithWhereWithoutInvoiceInputObjectSchema =
  Schema;
