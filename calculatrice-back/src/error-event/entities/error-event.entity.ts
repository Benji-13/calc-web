import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { Type } from "class-transformer";

@Entity()
export class ErrorEvent {
	@PrimaryGeneratedColumn()
	id: number;

	@Type(() => Date)
	@CreateDateColumn({name: 'created_at' })
	created_at: Date;
}
