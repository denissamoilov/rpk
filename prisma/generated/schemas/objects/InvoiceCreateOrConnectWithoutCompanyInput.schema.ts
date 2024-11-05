import { z } from 'zod';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceCreateWithoutCompanyInputObjectSchema } from './InvoiceCreateWithoutCompanyInput.schema';
import { InvoiceUncheckedCreateWithoutCompanyInputObjectSchema } from './InvoiceUncheckedCreateWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutCompanyInput> = z
  .object({
    where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => InvoiceCreateWithoutCompanyInputObjectSchema),
      z.lazy(() => InvoiceUncheckedCreateWithoutCompanyInputObjectSchema),
    ]),
  })
  .strict();

export const InvoiceCreateOrConnectWithoutCompanyInputObjectSchema = Schema;
