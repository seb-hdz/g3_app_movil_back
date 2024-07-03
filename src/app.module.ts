import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

import { UsersModule } from './resources/users/users.module';
import { AuthModule } from './resources/auth/auth.module';
import { ScansModule } from './resources/scans/scans.module';
import { CloudinaryModule } from './resources/cloudinary/cloudinary.module';
import { ResultsModule } from './resources/results/results.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ScansModule,
    CloudinaryModule,
    MulterModule.register({ storage: memoryStorage() }),
    ResultsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
