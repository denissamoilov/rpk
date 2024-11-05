import { z } from 'zod';
import { InvoiceItemWhereInputObjectSchema } from './objects/InvoiceItemWhereInput.schema';
import { InvoiceItemOrderByWithAggregationInputObjectSchema } from './objects/InvoiceItemOrderByWithAggregationInput.schema';
import { InvoiceItemScalarWhereWithAggregatesInputObjectSchema } from './objects/InvoiceItemScalarWhereWithAggregatesInput.schema';
import { InvoiceItemScalarFieldEnumSchema } from './enums/InvoiceItemScalarFieldEnum.schema';

export const InvoiceItemGroupBySchema = z.object({
  where: InvoiceItemWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      InvoiceItemOrderByWithAggregationInputObjectSchema,
      InvoiceItemOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: InvoiceItemScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(InvoiceItemScalarFieldEnumSchema),
});
