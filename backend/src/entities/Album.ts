import {
  Entity,
  Property,
  OneToMany,
  Collection,
  ManyToOne,
  PrimaryKey,
} from '@mikro-orm/core';
import { BaseEntity } from './BaseEntity';
import { Track } from './Track';
import { User } from './user';

@Entity()
export class Album extends BaseEntity {
  @PrimaryKey()
  id: number;

  @Property()
  title: string;

  @Property()
  listens: number;

  @OneToMany(() => Track, (track) => track.album)
  tracks = new Collection<Track>(this);

  @ManyToOne(() => User)
  user: User;
}
