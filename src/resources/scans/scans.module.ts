import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ScansService } from './scans.service';
import { ScansController } from './scans.controller';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { PrismaService } from 'src/prisma.service';
import { AuthMiddleware } from '../auth/auth.middleware';

@Module({
  controllers: [ScansController],
  providers: [ScansService, CloudinaryService, PrismaService],
})
export class ScansModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('scans');
  }
}
