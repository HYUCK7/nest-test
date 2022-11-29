import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ApiController } from './api/api.controller';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';
import emailConfig from './config/emailConfig';
import { validationSchema } from './config/validationSchema';

@Module({
  imports: [
    UsersModule,
    EmailModule,
    ConfigModule.forRoot({
      // envFilePath는 NODE_ENV 의 값이 stage라면 dist 디렉토리 아래에
      // 존재하는 파일인 .stage.env 파일의 절대 경로를 갖게된다.
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [emailConfig], // configFactory
      isGlobal: true, // 전역 모듈로 동작하도록 해, 어느 모듈에서나 사용할 수 있도록 했음.
      validationSchema,
    }),
  ],
  controllers: [ApiController],
  providers: [],
})
export class AppModule {}
