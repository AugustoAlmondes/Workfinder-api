import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
    providers: [PrismaService],
    exports: [PrismaService], // ESSENCIAL! Isso permite que outros módulos que importem DatabaseModule usem PrismaService.
})
export class DatabaseModule { }