import { z } from 'zod';
import { InvoiceItemWhereUniqueInputObjectSchema } from './objects/InvoiceItemWhereUniqueInput.schema';

export const InvoiceItemDeleteOneSchema = z.object({
  where: InvoiceItemWhereUniqueInputObjectSchema,
});
