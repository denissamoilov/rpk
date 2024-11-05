import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'name',
  'password',
  'emailVerified',
  'image',
  'role',
  'createdAt',
  'updatedAt',
  'agreedToTerms',
]);
