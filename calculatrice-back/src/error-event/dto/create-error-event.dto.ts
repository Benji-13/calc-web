import { IsDate } from "class-validator";
import { Type } from "class-transformer";

export class CreateErrorEventDto {
	@Type(() => Date)
	@IsDate()
	created_at: Date;
}
