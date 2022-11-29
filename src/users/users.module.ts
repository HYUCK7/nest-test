import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { EmailService } from 'src/email/email.service';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
