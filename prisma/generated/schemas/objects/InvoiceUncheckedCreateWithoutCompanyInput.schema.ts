import { z } from 'zod';
import { InvoiceStatusSchema } from '../enums/InvoiceStatus.schema';
import { InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInputObjectSchema } from './InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUncheckedCreateWithoutCompanyInput> = z
  .object({
    id: z.string().optional(),
    number: z.string(),
    date: z.coerce.date(),
    dueDate: z.coerce.date(),
    totalAmount: z.number(),
    status: z.lazy(() => InvoiceStatusSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    items: z
      .lazy(
        () =>
          InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const InvoiceUncheckedCreateWithoutCompanyInputObjectSchema = Schema;
