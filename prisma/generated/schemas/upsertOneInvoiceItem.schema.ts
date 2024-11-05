import { z } from 'zod';
import { InvoiceItemWhereUniqueInputObjectSchema } from './objects/InvoiceItemWhereUniqueInput.schema';
import { InvoiceItemCreateInputObjectSchema } from './objects/InvoiceItemCreateInput.schema';
import { InvoiceItemUncheckedCreateInputObjectSchema } from './objects/InvoiceItemUncheckedCreateInput.schema';
import { InvoiceItemUpdateInputObjectSchema } from './objects/InvoiceItemUpdateInput.schema';
import { InvoiceItemUncheckedUpdateInputObjectSchema } from './objects/InvoiceItemUncheckedUpdateInput.schema';

export const InvoiceItemUpsertSchema = z.object({
  where: InvoiceItemWhereUniqueInputObjectSchema,
  create: z.union([
    InvoiceItemCreateInputObjectSchema,
    InvoiceItemUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    InvoiceItemUpdateInputObjectSchema,
    InvoiceItemUncheckedUpdateInputObjectSchema,
  ]),
});
