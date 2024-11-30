import { Module } from '@nestjs/common';
import { FcaseController } from './fcase.controller';
import { FcaseService } from './fcase.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fcase } from 'src/model/fcase';
import { Accused } from 'src/model/accused';
import { Investigation } from 'src/model/investigation';

@Module({
  imports : [TypeOrmModule.forFeature([Fcase, Accused, Investigation])],
  controllers: [FcaseController],
  providers: [FcaseService]
})
export class FcaseModule {}
