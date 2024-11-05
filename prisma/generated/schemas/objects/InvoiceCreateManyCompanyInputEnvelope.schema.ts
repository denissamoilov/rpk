import { z } from 'zod';
import { InvoiceCreateManyCompanyInputObjectSchema } from './InvoiceCreateManyCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateManyCompanyInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => InvoiceCreateManyCompanyInputObjectSchema),
      z.lazy(() => InvoiceCreateManyCompanyInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const InvoiceCreateManyCompanyInputEnvelopeObjectSchema = Schema;
