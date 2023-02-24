import { Playlist } from './Playlist';
import { Entity, Property, ManyToOne, PrimaryKey } from '@mikro-orm/core';
import { Album } from './Album';
import { BaseEntity } from './BaseEntity';

@Entity()
export class Track extends BaseEntity {
  @PrimaryKey()
  id: number;

  @Property()
  title: string;

  @Property()
  listens: number;

  @ManyToOne(() => Album)
  album: Album;

  @ManyToOne(() => Playlist)
  playlist: Playlist;
}
