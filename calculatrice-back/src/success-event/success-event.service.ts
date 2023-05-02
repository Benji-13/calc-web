import { Injectable } from '@nestjs/common';
import { CreateSuccessEventDto } from './dto/create-success-event.dto';
import { SuccessEvent } from "./entities/success-event.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { LessThan, Repository } from "typeorm";

@Injectable()
export class SuccessEventService {
	constructor(
		@InjectRepository(SuccessEvent)
		private successEventRepository: Repository<SuccessEvent>
	) {}

	async create(createSuccessEventDto: CreateSuccessEventDto) {
		const successEvent = new SuccessEvent()
		successEvent.timeTakenMs = createSuccessEventDto.timeTakenMs
	
		const fasterEvents = await this.successEventRepository.createQueryBuilder("success-event").where("success-event.timeTakenMs < :value", {value: successEvent.timeTakenMs}).getCount()

		const allEvents = await this.successEventRepository.createQueryBuilder("success-event").getMany()

		let totalTime = 0

		allEvents.map(el => {
			totalTime += el.timeTakenMs
		})

		await this.successEventRepository.save(successEvent)

		return {
			fasterEvents: Math.round(fasterEvents/allEvents.length * 100),
			averageTime: Math.round(totalTime / allEvents.length)
		}
	}

}
