import { z } from 'zod';
import { InvoiceItemUpdateManyMutationInputObjectSchema } from './objects/InvoiceItemUpdateManyMutationInput.schema';
import { InvoiceItemWhereInputObjectSchema } from './objects/InvoiceItemWhereInput.schema';

export const InvoiceItemUpdateManySchema = z.object({
  data: InvoiceItemUpdateManyMutationInputObjectSchema,
  where: InvoiceItemWhereInputObjectSchema.optional(),
});
