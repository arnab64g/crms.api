import { Body, Controller, Post, Put } from '@nestjs/common';
import { OfficerService } from './officer.service';
import { Officer_Dro } from 'src/dto/officer_dto';

@Controller('api/officer')
export class OfficerController {
    constructor(private officeeService : OfficerService) {}
    
    @Post()
    async addOfficer(@Body() officerDto : Officer_Dro) : Promise<string>
    {
        return await this.officeeService.addOfficer(officerDto);
    }
    
    @Put()
    async updateOfficer(@Body() officerDto : Officer_Dro) : Promise<number>
    {
        return await this.officeeService.updateOfficer(officerDto);
    }
}
