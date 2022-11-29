import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApiController } from './api/api.controller';
import { EmailModule } from './email/email.module';

@Module({
  imports: [UsersModule, EmailModule],
  controllers: [ApiController],
  providers: [],
})
export class AppModule {}
