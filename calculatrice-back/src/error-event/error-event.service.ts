import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateErrorEventDto } from "./dto/create-error-event.dto";
import { ErrorEvent } from "./entities/error-event.entity";

@Injectable()
export class ErrorEventService {
	constructor(
		@InjectRepository(ErrorEvent)
		private errorEventRepository: Repository<ErrorEvent>
	) {}

	async create(createErrorEventDto: CreateErrorEventDto) {
		const errorEvent = new ErrorEvent()
		errorEvent.created_at = createErrorEventDto.created_at

		let errorCount = await this.errorEventRepository.createQueryBuilder("error-event").getCount()
		let latestError = await this.errorEventRepository.createQueryBuilder("error-event").orderBy("error-event.created_at", "DESC").limit(1).getOne()

		await this.errorEventRepository.save(errorEvent)

		return {
			errorCount: errorCount,
			latestInsert: latestError.created_at
		}
	}

}
