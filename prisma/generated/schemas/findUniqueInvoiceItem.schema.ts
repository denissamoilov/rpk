import { z } from 'zod';
import { InvoiceItemWhereUniqueInputObjectSchema } from './objects/InvoiceItemWhereUniqueInput.schema';

export const InvoiceItemFindUniqueSchema = z.object({
  where: InvoiceItemWhereUniqueInputObjectSchema,
});
