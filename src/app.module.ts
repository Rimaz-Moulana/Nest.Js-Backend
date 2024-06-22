import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'rimaz',
      password: '1234',
      database: 'nestjs_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    PostModule,
    AuthModule,
  ],
})
export class AppModule {}
