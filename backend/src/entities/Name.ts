import { Entity, Property, OneToOne } from '@mikro-orm/core';
import { BaseEntity } from './BaseEntity';
import { User } from './user';

@Entity()
export class Name extends BaseEntity {
  @Property()
  firstname: string;

  @Property()
  lastname: string;

  @Property()
  middlename: string;

  @OneToOne(() => User)
  user: User;
}
