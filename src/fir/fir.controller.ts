import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { FirService } from './fir.service';
import { Fir_Dto } from 'src/dto/fir_dto';

@Controller('api/fir')
export class FirController {
    constructor(private firService: FirService) {}
    
    @Post()
    async addFir(@Body() fir : Fir_Dto) : Promise<number> {
        return await this.firService.addFir(fir);
    }

    @Get(':id')
    async getFir(@Req() req : any) {
        return await this.firService.getFir(req.query.id)
    }

    @Get()
    async getFirs(){
        return await this.firService.getAllFir();
    }
}
