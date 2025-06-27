import { Injectable, UnauthorizedException } from '@nestjs/common';
import { EmpresaDto } from 'src/dto/empresa.dto';
import { UsuarioDto } from 'src/dto/usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

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
            if (await bcrypt.compare(senha, usuarioExist.senha)) {
                const { senha, ...usuarioSemSenha } = usuarioExist;
                return usuarioSemSenha;
            }
            throw new UnauthorizedException('Senha inválida');
        }
        throw new UnauthorizedException('E-mail não encontrado');
        // return 'Usuário não encontrado';
    }

    async loginFirms(email: string, senha: string) {
        const empresaExist = await this.prisma.empresa.findUnique({
            where: { email: email }
        })

        if (empresaExist) {
            if (await bcrypt.compare(senha, empresaExist.senha)) {
                const { senha, ...empresaSemSenha } = empresaExist;
                return empresaSemSenha;
            }
            throw new UnauthorizedException('Senha inválida');
        }
        throw new UnauthorizedException('E-mail não encontrado');
    }

    async registerUser(data: UsuarioDto) {
        const usuarioExist = await this.prisma.usuario.findUnique({
            where: { email: data.email }
        });
        if (usuarioExist) {
            throw new UnauthorizedException('E-mail ja cadastrado');
        }

        const hasPassword = await bcrypt.hash(data.senha, 10);

        const user = await this.prisma.usuario.create({
            data: {
                ...data,
                senha: hasPassword
            }
        });
        const { senha, ...usuarioSemSenha } = user;
        return usuarioSemSenha;
    }

    async registerFirm(data: EmpresaDto) {
        const empresaExist = await this.prisma.empresa.findUnique({
            where: { email: data.email }
        });
        if (empresaExist) {
            throw new UnauthorizedException('E-mail ja cadastrado');
        }

        const hasPassword = await bcrypt.hash(data.senha, 10);

        const empresa = await this.prisma.empresa.create({
            data: {
                ...data,
                senha: hasPassword
            }
        });
        const { senha, ...empresaSemSenha } = empresa;
        return empresaSemSenha;
    }

    // async deleteAll(){
    //     return this.prisma.vaga.deleteMany();
    // }
}