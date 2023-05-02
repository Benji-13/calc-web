import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ErrorEventService } from './error-event.service';
import { CreateErrorEventDto } from './dto/create-error-event.dto';

@Controller('error-event')
export class ErrorEventController {
	constructor(private readonly errorEventService: ErrorEventService) {}

	@Post()
	create(@Body() createErrorEventDto: CreateErrorEventDto) {
		return this.errorEventService.create(createErrorEventDto);
	}

}
