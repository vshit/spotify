import {
  Entity,
  Property,
  OneToOne,
  OneToMany,
  Collection,
} from '@mikro-orm/core';
import { Album } from './Album';
import { BaseEntity } from './BaseEntity';
import { Name } from './Name';
import { Playlist } from './Playlist';

@Entity()
export class User extends BaseEntity {
  @Property()
  username: string;

  @OneToOne(() => Name, (name) => name.user)
  name: string;

  @OneToMany({ entity: () => Album, mappedBy: (album) => album.user })
  albums = new Collection<Album>(this);

  @OneToMany({ entity: () => Playlist, mappedBy: (playlist) => playlist.user })
  playlist = new Collection<Playlist>(this);
}
