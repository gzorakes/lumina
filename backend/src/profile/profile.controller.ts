import { Body, Controller, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileDto } from './profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Body() body: ProfileDto) {
    return this.profileService.create(body);
  }
}
