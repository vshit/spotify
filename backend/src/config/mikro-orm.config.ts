import { Options } from '@mikro-orm/core';
import { User, Name, Track, Playlist, Album } from '../entities';

const options: Options = {
  entities: [User, Name, Track, Playlist, Album],
  dbName: 'spotify-backend',
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  type: 'postgresql',
  port: 5432,
};

export default options;
