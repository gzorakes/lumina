import { createZodDto } from 'nestjs-zod';
import { profileSchema } from './profile.schema';

export class ProfileDto extends createZodDto(profileSchema) {}
