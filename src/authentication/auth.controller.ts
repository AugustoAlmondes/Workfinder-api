import { Body, Controller, Delete, Post } from '@nestjs/common';
import { AuthService } from 'src/authentication/auth.service';
import { UsuarioDto } from 'src/dto/usuario.dto';
import { EmpresaDto } from 'src/dto/empresa.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login-user')
    async loginUser(@Body() data: UsuarioDto) {
        const { email, senha } = data;
        return this.authService.loginUser(email, senha);
    }

    @Post('login-firm')
    async loginFirm(@Body() data: EmpresaDto) {
        const {email, senha} = data;
        return this.authService.loginFirms(email, senha);
    }

    @Post('register-user')
    async registerUser(@Body() data: UsuarioDto) {
        data
        return this.authService.registerUser(data);
    }

    @Post ('register-firm')
    async registerFirm(@Body() data: EmpresaDto) {
        data
        return this.authService.registerFirm(data);
    }

    // @Delete('delete-all')
    // async deleteAll() {
    //     return this.authService.deleteAll();
    // }
}