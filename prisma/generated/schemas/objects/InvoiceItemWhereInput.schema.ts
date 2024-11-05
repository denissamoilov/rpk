import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { InvoiceRelationFilterObjectSchema } from './InvoiceRelationFilter.schema';
import { InvoiceWhereInputObjectSchema } from './InvoiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InvoiceItemWhereInputObjectSchema),
        z.lazy(() => InvoiceItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InvoiceItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InvoiceItemWhereInputObjectSchema),
        z.lazy(() => InvoiceItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    invoiceId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    quantity: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    unitPrice: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    amount: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    invoice: z
      .union([
        z.lazy(() => InvoiceRelationFilterObjectSchema),
        z.lazy(() => InvoiceWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const InvoiceItemWhereInputObjectSchema = Schema;
