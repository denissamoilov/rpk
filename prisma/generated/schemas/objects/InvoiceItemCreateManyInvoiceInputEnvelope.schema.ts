import { z } from 'zod';
import { InvoiceItemCreateManyInvoiceInputObjectSchema } from './InvoiceItemCreateManyInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemCreateManyInvoiceInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => InvoiceItemCreateManyInvoiceInputObjectSchema),
      z.lazy(() => InvoiceItemCreateManyInvoiceInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const InvoiceItemCreateManyInvoiceInputEnvelopeObjectSchema = Schema;
