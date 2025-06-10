import { Injectable, UnauthorizedException } from '@nestjs/common';
import { EmpresaDto } from 'src/dto/empresa.dto';
import { UsuarioDto } from 'src/dto/usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService) { }

    async loginUser(email: string, senha: string) {
        const usuarioExist = await this.prisma.usuario.findUnique({
            where: {
                email: email
            }
        })
        if (usuarioExist) {
            const senhaValida = usuarioExist && usuarioExist.senha === senha;
            if (senhaValida) {
                const { senha, confirm_senha, ...usuarioSemSenha } = usuarioExist;
                return usuarioSemSenha;
            }
            throw new UnauthorizedException('Senha inválida');
        }
        return null;
    }

    async loginFirms(email: string, senha: string) {
        const empresaExist = await this.prisma.empresa.findUnique({
            where: { email: email }
        })

        if (empresaExist) {
            const senhaValida = empresaExist && empresaExist.senha === senha;
            if (senhaValida) {
                const { senha, ...empresaSemSenha } = empresaExist;
                return empresaSemSenha;
            }
        }
        return null;
    }

    async registerUser(data: UsuarioDto) {
        const user = await this.prisma.usuario.create({ data });
        return user;
    }

    async registerFirm(data: EmpresaDto) {
        const empresa = await this.prisma.empresa.create({ data });
        return empresa;
    }
}