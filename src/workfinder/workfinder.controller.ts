import { WorkfinderService } from 'src/workfinder/workfinder.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioDto } from 'src/dto/usuario.dto';

@Controller('workfinder-controller')
export class WorkfinderControllerController {

    constructor(private readonly workfinderService: WorkfinderService) { }

    @Post()
    async create(@Body() data: UsuarioDto) {
        data
        return this.workfinderService.create(data);
    }

    @Get()
    async findAll() {
        return this.workfinderService.findAll();
    }

    @Delete(':email')
    async delete(@Param("email") email: string) {
        return this.workfinderService.delete(email);
    }

    @Put(':id')
    async update(@Param("id") id: number, @Body() data: UsuarioDto) {
        return this.workfinderService.update(id, data);
    }

    @Get(':email')
    async findOne(@Param("email") email: string, @Body() data: UsuarioDto) {
        return this.workfinderService.findOne(email, data);
    }
}