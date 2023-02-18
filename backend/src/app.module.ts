import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import options from './config/mikro-orm.config';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    MikroOrmModule.forRoot({ ...options, autoLoadEntities: true }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
