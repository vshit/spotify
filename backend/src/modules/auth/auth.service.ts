import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthDto } from './dto';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entities';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async login(dto: AuthDto) {
    const user = await this.validateUser(dto);

    if (user) {
      return this.generateToken(user);
    }
  }

  async register(dto: AuthDto) {
    const candidate = await this.userService.findByName(dto.username);

    if (candidate) {
      throw new BadRequestException(`User with this username already exists`);
    }

    const hashPassword = await bcrypt.hash(dto.password, 5);
    const user = await this.userService.create({
      username: dto.username,
      password: hashPassword,
      email: '',
      name: {
        firstname: '',
        middlename: '',
        lastname: '',
      },
    });

    return this.generateToken(user);
  }

  private generateToken(data: User) {
    const payload = {
      id: data.id,
      username: data.username,
      email: data.email,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(dto: AuthDto) {
    const user = await this.userService.findByName(dto.username);

    if (!user) {
      throw new NotFoundException(
        `Couldn't find a user with username ${dto.username}`,
      );
    }

    const passwordEquals = await bcrypt.compare(dto.password, user.password);

    if (passwordEquals) {
      return user;
    }

    throw new UnauthorizedException({
      message: 'Incorrect password',
    });
  }
}
