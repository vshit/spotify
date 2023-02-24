import { EntityManager } from '@mikro-orm/postgresql';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Name, User } from 'src/entities';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private readonly em: EntityManager) {}

  private repository = this.em.getRepository(User);

  async findAll() {
    try {
      const users = await this.repository.findAll({ populate: ['name'] });

      return users;
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id: number) {
    try {
      const user = await this.repository.findOne({
        id: id,
      });

      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async findByName(username: string) {
    try {
      const user = await this.repository.findOne({
        username: username,
      });

      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async create(dto: CreateUserDto) {
    try {
      const candidate = await this.findByName(dto.username);

      if (candidate) {
        throw new BadRequestException(
          `Username must be unique. ${dto.username}`,
        );
      }

      const user = new User();
      user.username = dto.username;
      user.email = dto.email;
      user.password = dto.password;

      const result = this.repository.create(user);

      await this.em.persistAndFlush(result);

      const name = new Name();
      name.firstname = dto.name.firstname;
      name.middlename = dto.name.middlename;
      name.lastname = dto.name.lastname;
      name.user = user;

      await this.em.persistAndFlush(name);

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
