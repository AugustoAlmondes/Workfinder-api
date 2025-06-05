import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService) { }

    async login(email: string, senha: string) {
        const usuarioExist = await this.prisma.usuario.findUnique({
            where: {
                email: email
            }
        })
        if (usuarioExist) {
            const senhaValida = usuarioExist && usuarioExist.senha === senha;
            if (senhaValida) {  
                const { senha, confirm_senha, ... usuarioSemSenha} = usuarioExist;
                return usuarioSemSenha;
            }
            throw new UnauthorizedException('Senha inválida');
        }
        return null;
    }
}