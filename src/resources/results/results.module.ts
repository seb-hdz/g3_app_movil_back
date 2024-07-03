import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ResultsService } from './results.service';
import { ResultsController } from './results.controller';
import { PrismaService } from 'src/prisma.service';
import { AuthMiddleware } from '../auth/auth.middleware';

@Module({
  controllers: [ResultsController],
  providers: [ResultsService, PrismaService],
})
export class ResultsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('results');
  }
}
