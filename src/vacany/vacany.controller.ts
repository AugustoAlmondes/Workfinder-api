import { Body, Controller, Get, Post } from "@nestjs/common";
import { VacanyService } from "./vacany.service";
import { VacancyDto } from "src/dto/vacany.dto";




@Controller('vacany')
export class VacanyController {
    constructor(private readonly vacanyService: VacanyService) { }

    @Get()
    findAll(){
        return this.vacanyService.findAll();
    }

    @Post('register')
    registerVacany(@Body() data: VacancyDto){
        data
        return this.vacanyService.registerVacany(data);
    }
}