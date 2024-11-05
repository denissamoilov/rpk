import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CompanyCountOrderByAggregateInputObjectSchema } from './CompanyCountOrderByAggregateInput.schema';
import { CompanyMaxOrderByAggregateInputObjectSchema } from './CompanyMaxOrderByAggregateInput.schema';
import { CompanyMinOrderByAggregateInputObjectSchema } from './CompanyMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    regNumber: z.lazy(() => SortOrderSchema).optional(),
    vatNumber: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => CompanyCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => CompanyMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CompanyMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CompanyOrderByWithAggregationInputObjectSchema = Schema;
