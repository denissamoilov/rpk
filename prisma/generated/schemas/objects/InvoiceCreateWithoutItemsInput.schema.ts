import { z } from 'zod';
import { InvoiceStatusSchema } from '../enums/InvoiceStatus.schema';
import { CompanyCreateNestedOneWithoutInvoicesInputObjectSchema } from './CompanyCreateNestedOneWithoutInvoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateWithoutItemsInput> = z
  .object({
    id: z.string().optional(),
    number: z.string(),
    date: z.coerce.date(),
    dueDate: z.coerce.date(),
    totalAmount: z.number(),
    status: z.lazy(() => InvoiceStatusSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    company: z.lazy(
      () => CompanyCreateNestedOneWithoutInvoicesInputObjectSchema,
    ),
  })
  .strict();

export const InvoiceCreateWithoutItemsInputObjectSchema = Schema;
