import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { WorkfinderModuleModule } from './workfinder-module/workfinder-module.module';
import { WorkfinderService } from './workfinder/workfinder.service';
import { WorkfinderControllerController } from './workfinder-controller/workfinder-controller.controller';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [WorkfinderModuleModule, TasksModule],
  controllers: [WorkfinderControllerController],
  providers: [WorkfinderService,PrismaService],
})
export class AppModule {}
