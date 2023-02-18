import {
  Entity,
  Property,
  OneToMany,
  Collection,
  ManyToOne,
} from '@mikro-orm/core';
import { BaseEntity } from './BaseEntity';
import { Track } from './Track';
import { User } from './user';

@Entity()
export class Playlist extends BaseEntity {
  @Property()
  title: string;

  @Property()
  listens: number;

  @OneToMany(() => Track, (track) => track.playlist)
  tracks = new Collection<Track>(this);

  @ManyToOne(() => User)
  user: User;
}
