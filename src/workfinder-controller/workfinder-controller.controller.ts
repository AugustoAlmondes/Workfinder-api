import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioDto } from 'src/workfinder/dto/usuario.dto';
import { WorkfinderService } from 'src/workfinder/workfinder.service';

@Controller('workfinder-controller')
export class WorkfinderControllerController {

    constructor(private readonly workfinderService:WorkfinderService){}

    @Post()
    async create(@Body() data:UsuarioDto) {
            data
        return this.workfinderService.create(data);
    }

    @Get()
    async findAll() {
        return this.workfinderService.findAll();
    }

    @Delete(':email')
    async delete(@Param("email") email:string) {
        return this.workfinderService.delete(email);
    }

    @Put(':id')
    async update(@Param("id") id:number,@Body() data: UsuarioDto) {
        return this.workfinderService.update(id, data);
    }
}
