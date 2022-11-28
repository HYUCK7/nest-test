import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: 'api.localhost' }) // 하위 도메인 요청 처리
export class ApiController {
  @Get()
  index(): string {
    return 'Hello, SingleApi';
  }
}

@Controller({ host: ':version.api.localhost' })
export class ApiVersionController {
  @Get()
  index(@HostParam('version') version: string): string {
    return `hello, SingleApi ${version}`;
  }
}
