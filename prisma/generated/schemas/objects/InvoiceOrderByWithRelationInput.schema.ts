import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CompanyOrderByWithRelationInputObjectSchema } from './CompanyOrderByWithRelationInput.schema';
import { InvoiceItemOrderByRelationAggregateInputObjectSchema } from './InvoiceItemOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    number: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    dueDate: z.lazy(() => SortOrderSchema).optional(),
    companyId: z.lazy(() => SortOrderSchema).optional(),
    totalAmount: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    company: z
      .lazy(() => CompanyOrderByWithRelationInputObjectSchema)
      .optional(),
    items: z
      .lazy(() => InvoiceItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const InvoiceOrderByWithRelationInputObjectSchema = Schema;
