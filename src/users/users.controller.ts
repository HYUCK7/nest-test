import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpCode,
  BadRequestException,
  Header,
  Redirect,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  CreateUserDto,
  UserLoginDto,
  VerifyEmailDto,
} from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {} // userService 를 컨트롤러에 주입한다.
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    const { name, email, password } = dto; // dto에서 얻은 정보를 UserService에 전달한다.
    await this.usersService.createUser(name, email, password);
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    console.log(dto);
    return;
  }

  // example
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const { name, email } = createUserDto;
    return `Create User. 이름: ${name}, 이메일 : ${email}`;
  }

  @Get()
  findAll(@Res() res) {
    const users = this.usersService.findAll();
    return res.status(200).send(users);
  }

  @Redirect('https://nestjs.com', 301)
  @Get(':id')
  findOne(@Param('id') id: string) {
    if (+id < 1) {
      throw new BadRequestException('id > 0 Plz');
    }
    return this.usersService.findOne(+id);
  }
  // @HttpCode(202)
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Header('Custom', 'Test Header')
  @Get(':id')
  findOneWithHeader(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
  @Get('redirect/docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
