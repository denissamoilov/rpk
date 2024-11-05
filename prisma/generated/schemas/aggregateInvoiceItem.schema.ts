import { z } from 'zod';
import { InvoiceItemOrderByWithRelationInputObjectSchema } from './objects/InvoiceItemOrderByWithRelationInput.schema';
import { InvoiceItemWhereInputObjectSchema } from './objects/InvoiceItemWhereInput.schema';
import { InvoiceItemWhereUniqueInputObjectSchema } from './objects/InvoiceItemWhereUniqueInput.schema';
import { InvoiceItemCountAggregateInputObjectSchema } from './objects/InvoiceItemCountAggregateInput.schema';
import { InvoiceItemMinAggregateInputObjectSchema } from './objects/InvoiceItemMinAggregateInput.schema';
import { InvoiceItemMaxAggregateInputObjectSchema } from './objects/InvoiceItemMaxAggregateInput.schema';
import { InvoiceItemAvgAggregateInputObjectSchema } from './objects/InvoiceItemAvgAggregateInput.schema';
import { InvoiceItemSumAggregateInputObjectSchema } from './objects/InvoiceItemSumAggregateInput.schema';

export const InvoiceItemAggregateSchema = z.object({
  orderBy: z
    .union([
      InvoiceItemOrderByWithRelationInputObjectSchema,
      InvoiceItemOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: InvoiceItemWhereInputObjectSchema.optional(),
  cursor: InvoiceItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), InvoiceItemCountAggregateInputObjectSchema])
    .optional(),
  _min: InvoiceItemMinAggregateInputObjectSchema.optional(),
  _max: InvoiceItemMaxAggregateInputObjectSchema.optional(),
  _avg: InvoiceItemAvgAggregateInputObjectSchema.optional(),
  _sum: InvoiceItemSumAggregateInputObjectSchema.optional(),
});
