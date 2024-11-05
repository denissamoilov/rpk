import { z } from 'zod';
import { InvoiceItemOrderByWithRelationInputObjectSchema } from './objects/InvoiceItemOrderByWithRelationInput.schema';
import { InvoiceItemWhereInputObjectSchema } from './objects/InvoiceItemWhereInput.schema';
import { InvoiceItemWhereUniqueInputObjectSchema } from './objects/InvoiceItemWhereUniqueInput.schema';
import { InvoiceItemScalarFieldEnumSchema } from './enums/InvoiceItemScalarFieldEnum.schema';

export const InvoiceItemFindFirstSchema = z.object({
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
  distinct: z.array(InvoiceItemScalarFieldEnumSchema).optional(),
});
