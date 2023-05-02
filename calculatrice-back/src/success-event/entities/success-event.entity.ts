import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class SuccessEvent {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	timeTakenMs: number;
}

