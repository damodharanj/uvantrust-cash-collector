import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { PhotoModule } from './photo/photo.module';
import { CatModule } from './cat/cat.module';
import { OtpModule } from './otp/otp.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'ds013589.mlab.com',
      port: 13589,
      username: 'admin',
      password: 'aramm2019',
      database: 'aramm',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
    }),
    PhotoModule,
    CatModule,
    OtpModule,
  ],
  providers: [],
})
export class ApplicationModule {}

// mongodb://<dbuser>:<dbpassword>@ds013589.mlab.com:13589/aramm

// MongooseModule.forRoot('mongodb://admin:aramm2019@ds013589.mlab.com:13589/aramm')