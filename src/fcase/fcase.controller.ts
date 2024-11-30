import { Body, Controller, Put } from '@nestjs/common';
import { FcaseService } from './fcase.service';
import { Case_Dto } from 'src/dto/case_dto';

@Controller('api/fcase')
export class FcaseController {
    constructor(private fcaseService : FcaseService) {}

    @Put()
    async updateFcase(@Body() case_dto : Case_Dto){
        
    }
}