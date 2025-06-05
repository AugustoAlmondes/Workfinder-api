import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/authentication/auth.service';
import { Usuario } from 'generated/prisma';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() data: Usuario) {
        const { email, senha } = data;
        return this.authService.login(email, senha);
    }
}