import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { WorkfinderControllerController } from 'src/workfinder-controller/workfinder-controller.controller';
import { WorkfinderService } from 'src/workfinder/workfinder.service';

@Module({
    providers: [WorkfinderService, PrismaService],
    controllers: [WorkfinderControllerController]
})
export class WorkfinderModuleModule {}
