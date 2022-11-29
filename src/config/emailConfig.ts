import { registerAs } from '@nestjs/config';

export default registerAs('email', () => ({
  // 첫 번쨰 인자로 토큰을 문자열,
  // 두 번째 인자로 ConfigFactory 함수를 상곡하는 타입 TFactory의 함수를 받아,
  // TFactory와 ConfigFactoryKeyHost를 합친 타입 함수를 리턴한다.
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASSWORD,
  },
  baseUrl: process.env.EMAIL_BASE_URL,
}));
