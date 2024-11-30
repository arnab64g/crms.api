import { Module } from '@nestjs/common';
import { AccusedController } from './accused.controller';
import { AccusedService } from './accused.service';

@Module({
  controllers: [AccusedController],
  providers: [AccusedService]
})
export class AccusedModule {}
