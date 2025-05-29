import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { WorkfinderModuleModule } from './workfinder-module/workfinder-module.module';

@Module({
  imports: [WorkfinderModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
