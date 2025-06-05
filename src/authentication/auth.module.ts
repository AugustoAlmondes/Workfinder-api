import { AuthService } from 'src/authentication/auth.service';
import { Module } from '@nestjs/common';
import { AuthController } from 'src/authentication/auth.controller';
import { DatabaseModule } from 'src/prisma/prisma.module';

@Module({
    imports: [DatabaseModule],
    controllers: [AuthController],
    providers: [AuthService]
})

export class AuthModule { }