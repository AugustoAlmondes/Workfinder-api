import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class WorkfinderService {

    constructor(private prisma: PrismaService) {

    }
    async create(data: UsuarioDto) {
        const usuario = await this.prisma.usuario.create({
            data
        });

        return usuario;
    }

    async findAll() {
        return this.prisma.usuario.findMany();
    }

    async delete(email: string) {
        const usuarioExist = await this.prisma.usuario.findUnique({
            where: { email: email }})

            if(usuarioExist){
                return await this.prisma.usuario.delete({
                    where: { email: email }
                })
            }
    }

    async update(id: number, data: UsuarioDto) {
        const usuarioExist = await this.prisma.usuario.findUnique({
            where: { id: id }
        })

        if (usuarioExist) {
            return await this.prisma.usuario.update({
                data,
                where: { id: id }
            });
        }
    }
}
