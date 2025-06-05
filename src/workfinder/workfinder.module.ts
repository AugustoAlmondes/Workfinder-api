import { WorkfinderService } from 'src/workfinder/workfinder.service';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { WorkfinderControllerController } from 'src/workfinder/workfinder.controller';
import { DatabaseModule } from 'src/prisma/prisma.module';

@Module({
    imports: [DatabaseModule],
    providers: [WorkfinderService],
    controllers: [WorkfinderControllerController]
})
export class WorkfinderModuleModule { }
