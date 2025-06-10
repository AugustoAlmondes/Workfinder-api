import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/prisma/prisma.module";
import { VacanyController } from "./vacany.controller";
import { VacanyService } from "./vacany.service";


@Module({
    imports:[DatabaseModule],
    controllers:[VacanyController],
    providers:[VacanyService]
})

export class VacanyModule{}