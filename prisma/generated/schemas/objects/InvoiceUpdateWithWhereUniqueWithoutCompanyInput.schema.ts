import { z } from 'zod';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithoutCompanyInputObjectSchema } from './InvoiceUpdateWithoutCompanyInput.schema';
import { InvoiceUncheckedUpdateWithoutCompanyInputObjectSchema } from './InvoiceUncheckedUpdateWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpdateWithWhereUniqueWithoutCompanyInput> =
  z
    .object({
      where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => InvoiceUpdateWithoutCompanyInputObjectSchema),
        z.lazy(() => InvoiceUncheckedUpdateWithoutCompanyInputObjectSchema),
      ]),
    })
    .strict();

export const InvoiceUpdateWithWhereUniqueWithoutCompanyInputObjectSchema =
  Schema;
