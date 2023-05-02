import { IsNumber } from "class-validator";

export class CreateSuccessEventDto {
	@IsNumber()
	timeTakenMs: number;
}
