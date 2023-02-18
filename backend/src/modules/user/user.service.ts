import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entities';

@Injectable()
export class UserService {
  constructor(private readonly em: EntityManager) {}
  users = [];

  private repository = this.em.getRepository(User);

  async findAll() {
    return this.users;
  }

  async create() {
    const user = this.repository.create({ username: 'hhsqlp' });
    this.users.push(user);

    return user;
  }
}
