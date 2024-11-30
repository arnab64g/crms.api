import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Officer_Dro } from 'src/dto/officer_dto';
import { Investigation } from 'src/model/investigation';
import { Users } from 'src/model/user';
import { Repository } from 'typeorm';

@Injectable()
export class OfficerService {
    constructor(@InjectRepository(Investigation) private investigatioRepository : Repository<Investigation>,
                @InjectRepository(Users) private userRepository : Repository<Users>) {}

    async addOfficer(officer_dto : Officer_Dro) : Promise<string>{
        const officer : Investigation = {
            id : officer_dto.id,
            rank : officer_dto.rank
        }

        const res = await this.investigatioRepository.save(officer);
        const res1 = await this.userRepository.update({
            id : officer_dto.id
            },
            {
            role : "Officer"
            });
        return res.id;
    }

    async updateOfficer(officerDto : Officer_Dro) : Promise<number>{
        const res = await this.investigatioRepository.update({
            id : officerDto.id
        },
        {
            rank : officerDto.rank 
        });

        return res.affected;
    }
}
