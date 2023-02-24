import {
  Entity,
  Property,
  OneToOne,
  OneToMany,
  Collection,
  PrimaryKey,
  Unique,
} from '@mikro-orm/core';
import { Album } from './Album';
import { BaseEntity } from './BaseEntity';
import { Name } from './Name';
import { Playlist } from './Playlist';

@Entity()
@Unique({ properties: ['id', 'username', 'email'] })
export class User extends BaseEntity {
  @PrimaryKey()
  id: number;

  @Property()
  username: string;

  @Property()
  email: string;

  @Property()
  password: string;

  @OneToOne(() => Name, (name) => name.user)
  name?: Name;

  @OneToMany({ entity: () => Album, mappedBy: (album) => album.user })
  albums? = new Collection<Album>(this);

  @OneToMany({ entity: () => Playlist, mappedBy: (playlist) => playlist.user })
  playlist? = new Collection<Playlist>(this);
}
