import { z } from 'zod';
import { InvoiceStatusSchema } from '../enums/InvoiceStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumInvoiceStatusFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => InvoiceStatusSchema).optional(),
  })
  .strict();

export const EnumInvoiceStatusFieldUpdateOperationsInputObjectSchema = Schema;
