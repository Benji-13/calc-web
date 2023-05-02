import { Module } from '@nestjs/common';
import { ErrorEventService } from './error-event.service';
import { ErrorEventController } from './error-event.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ErrorEvent } from "./entities/error-event.entity";

@Module({
	imports: [TypeOrmModule.forFeature([ErrorEvent])],
  	controllers: [ErrorEventController],
  	providers: [ErrorEventService]
})
export class ErrorEventModule {}
