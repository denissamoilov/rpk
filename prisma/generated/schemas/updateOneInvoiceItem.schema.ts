import { z } from 'zod';
import { InvoiceItemUpdateInputObjectSchema } from './objects/InvoiceItemUpdateInput.schema';
import { InvoiceItemUncheckedUpdateInputObjectSchema } from './objects/InvoiceItemUncheckedUpdateInput.schema';
import { InvoiceItemWhereUniqueInputObjectSchema } from './objects/InvoiceItemWhereUniqueInput.schema';

export const InvoiceItemUpdateOneSchema = z.object({
  data: z.union([
    InvoiceItemUpdateInputObjectSchema,
    InvoiceItemUncheckedUpdateInputObjectSchema,
  ]),
  where: InvoiceItemWhereUniqueInputObjectSchema,
});
