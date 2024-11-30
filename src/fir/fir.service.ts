import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fir_Dto } from 'src/dto/fir_dto';
import { Fcase } from 'src/model/fcase';
import { Fir } from 'src/model/fir';
import { Investigation } from 'src/model/investigation';
import { Users } from 'src/model/user';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class FirService {
    constructor(@InjectRepository(Fir) private firRepository : Repository<Fir>,
                @InjectRepository(Users) private userRepository : Repository<Users>,
                @InjectRepository(Fcase) private fcaseRepository : Repository<Fcase>) {}

    async addFir(fir_dto : Fir_Dto) : Promise<number>{
        const user = await this.userRepository.findOne({where : { id : Equal(fir_dto.pretitioner_id)}})
        const fir : Fir = {
            id : fir_dto.id,
            date_lodged : fir_dto.date_lodged,
            inscident_date : fir_dto.inscident_date,
            place : fir_dto.place,
            petitioner : user
        }
        const res = await this.firRepository.save(fir);
        const fcase : Fcase = {
            id : 0,
            case_details : "",
            section_of_law : "",
            case_status : "",
            fir : res,
            investigation: null,
            accused : null

        }
        const resc = await this.fcaseRepository.save(fcase);

        return res.id;
    }

    async getFir(nid  : string) : Promise<Fir[]>{
        const user  = await this.userRepository.findOne({where : {id : Equal(nid)}})
        const res = await this.firRepository.find({where : {petitioner : user}})

        return res;
    }

    async getAllFir() : Promise<Fir[]> {
        const res = await this.firRepository.find();
        return res;
    }
}
