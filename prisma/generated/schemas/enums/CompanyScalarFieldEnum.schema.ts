import { z } from 'zod';

export const CompanyScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'regNumber',
  'vatNumber',
  'userId',
  'createdAt',
  'updatedAt',
]);
