import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import options from './config/mikro-orm.config';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    MikroOrmModule.forRoot({ ...options, autoLoadEntities: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
