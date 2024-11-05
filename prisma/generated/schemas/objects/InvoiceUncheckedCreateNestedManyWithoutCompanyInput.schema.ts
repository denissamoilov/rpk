import { z } from 'zod';
import { InvoiceCreateWithoutCompanyInputObjectSchema } from './InvoiceCreateWithoutCompanyInput.schema';
import { InvoiceUncheckedCreateWithoutCompanyInputObjectSchema } from './InvoiceUncheckedCreateWithoutCompanyInput.schema';
import { InvoiceCreateOrConnectWithoutCompanyInputObjectSchema } from './InvoiceCreateOrConnectWithoutCompanyInput.schema';
import { InvoiceCreateManyCompanyInputEnvelopeObjectSchema } from './InvoiceCreateManyCompanyInputEnvelope.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUncheckedCreateNestedManyWithoutCompanyInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InvoiceCreateWithoutCompanyInputObjectSchema),
          z.lazy(() => InvoiceCreateWithoutCompanyInputObjectSchema).array(),
          z.lazy(() => InvoiceUncheckedCreateWithoutCompanyInputObjectSchema),
          z
            .lazy(() => InvoiceUncheckedCreateWithoutCompanyInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => InvoiceCreateOrConnectWithoutCompanyInputObjectSchema),
          z
            .lazy(() => InvoiceCreateOrConnectWithoutCompanyInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => InvoiceCreateManyCompanyInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InvoiceUncheckedCreateNestedManyWithoutCompanyInputObjectSchema =
  Schema;
