import { Module } from '@nestjs/common';
import { WorkfinderModuleModule } from './workfinder/workfinder.module';
import { AuthModule } from './authentication/auth.module';
import { DatabaseModule } from './prisma/prisma.module';

@Module({
  imports: [WorkfinderModuleModule, AuthModule,DatabaseModule],
})
export class AppModule { }
