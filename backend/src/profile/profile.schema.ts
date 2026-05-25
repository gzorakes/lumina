import { z } from 'zod';

export const profileSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, 'Name cannot be empty')
    .min(2, 'Name must be at least 2 characters')
    .max(40),

  dateOfBirth: z
    .string()
    .min(1, 'Date of birth is required')
    .refine((val) => !isNaN(Date.parse(val)), 'Invalid date')
    .refine(
      (val) => new Date(val) <= new Date(),
      'Date cannot be in the future',
    )
    .refine(
      (val) => new Date(val) >= new Date('1900-01-01'),
      'Date is too far in the past',
    ),

  email: z.email('Enter a valid email address'),

  phone: z
    .string()
    .trim()
    .min(1, 'Phone is required')
    .regex(/^[+\d][\d\s()-]{6,}$/, 'Enter a valid phone number'),

  bio: z.string().trim().max(300).or(z.literal('')).optional(),
});
