import { Entity, Property, OneToOne, PrimaryKey } from '@mikro-orm/core';
import { BaseEntity } from './BaseEntity';
import { User } from './user';

@Entity()
export class Name extends BaseEntity {
  @PrimaryKey()
  id: number;

  @Property()
  firstname: string;

  @Property()
  lastname: string;

  @Property()
  middlename: string;

  @OneToOne(() => User)
  user: User;
}
