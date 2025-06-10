import { Injectable } from "@nestjs/common";
import { VacancyDto } from "src/dto/vacany.dto";
import { PrismaService } from "src/prisma/prisma.service";



@Injectable()
export class VacanyService{
    constructor(private prisma: PrismaService){}

    async findAll(){
        return this.prisma.vaga.findMany();
    }

    async registerVacany(data: VacancyDto){
        const vacany = await this.prisma.vaga.create({data});
        return vacany;
    }
}