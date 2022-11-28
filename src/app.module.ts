import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApiController } from './api/api.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [UsersModule],
  controllers: [ApiController],
  providers: [UsersService],
})
export class AppModule {}
