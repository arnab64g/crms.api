import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Case_Dto } from 'src/dto/case_dto';
import { Accused } from 'src/model/accused';
import { Fcase } from 'src/model/fcase';
import { Investigation } from 'src/model/investigation';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class FcaseService {
    constructor(@InjectRepository(Fcase) private fcaseRepository : Repository<Fcase> ,
                @InjectRepository(Accused) private accusedRepository : Repository<Accused>,
                @InjectRepository(Investigation) private invistigationRepository : Repository<Investigation>) {}

    async updateFcase(case_dto : Case_Dto) : Promise<number> {
        const investigation = await this.invistigationRepository.findOne({where : {id : Equal(case_dto.investigation)}});
        const fcase0 = await this.fcaseRepository.findOne({where : {id : case_dto.id}});
        let accuseds = await this.accusedRepository.find({where : {fcase : Equal(fcase0)}});
        const accused = await this.accusedRepository.findOne({where : {id : Equal(case_dto.accused)}});
        accuseds.push(accused);

        const res = await this.fcaseRepository.update(
            {
                id : case_dto.id
            },
            {
                case_details : case_dto.case_details,
                case_status : case_dto.case_status,
                section_of_law : case_dto.section_of_law,
                investigation : investigation,
                accused : accuseds
            }
        )
        return res.affected;
    }
}
