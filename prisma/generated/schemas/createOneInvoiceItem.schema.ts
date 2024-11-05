import { z } from 'zod';
import { InvoiceItemCreateInputObjectSchema } from './objects/InvoiceItemCreateInput.schema';
import { InvoiceItemUncheckedCreateInputObjectSchema } from './objects/InvoiceItemUncheckedCreateInput.schema';

export const InvoiceItemCreateOneSchema = z.object({
  data: z.union([
    InvoiceItemCreateInputObjectSchema,
    InvoiceItemUncheckedCreateInputObjectSchema,
  ]),
});
