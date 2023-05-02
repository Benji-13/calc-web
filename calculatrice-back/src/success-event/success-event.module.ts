import { Module } from '@nestjs/common';
import { SuccessEventService } from './success-event.service';
import { SuccessEventController } from './success-event.controller';
import { SuccessEvent } from "./entities/success-event.entity";
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
	imports: [TypeOrmModule.forFeature([SuccessEvent])],
  	controllers: [SuccessEventController],
  	providers: [SuccessEventService]
})
export class SuccessEventModule {}
