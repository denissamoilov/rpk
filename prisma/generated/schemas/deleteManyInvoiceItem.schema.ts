import { z } from 'zod';
import { InvoiceItemWhereInputObjectSchema } from './objects/InvoiceItemWhereInput.schema';

export const InvoiceItemDeleteManySchema = z.object({
  where: InvoiceItemWhereInputObjectSchema.optional(),
});
