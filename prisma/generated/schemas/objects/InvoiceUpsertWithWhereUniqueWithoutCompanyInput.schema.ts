import { z } from 'zod';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithoutCompanyInputObjectSchema } from './InvoiceUpdateWithoutCompanyInput.schema';
import { InvoiceUncheckedUpdateWithoutCompanyInputObjectSchema } from './InvoiceUncheckedUpdateWithoutCompanyInput.schema';
import { InvoiceCreateWithoutCompanyInputObjectSchema } from './InvoiceCreateWithoutCompanyInput.schema';
import { InvoiceUncheckedCreateWithoutCompanyInputObjectSchema } from './InvoiceUncheckedCreateWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpsertWithWhereUniqueWithoutCompanyInput> =
  z
    .object({
      where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => InvoiceUpdateWithoutCompanyInputObjectSchema),
        z.lazy(() => InvoiceUncheckedUpdateWithoutCompanyInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => InvoiceCreateWithoutCompanyInputObjectSchema),
        z.lazy(() => InvoiceUncheckedCreateWithoutCompanyInputObjectSchema),
      ]),
    })
    .strict();

export const InvoiceUpsertWithWhereUniqueWithoutCompanyInputObjectSchema =
  Schema;
