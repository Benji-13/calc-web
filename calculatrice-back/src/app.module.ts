import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuccessEventModule } from './success-event/success-event.module';
import { ErrorEventModule } from './error-event/error-event.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { SuccessEvent } from "./success-event/entities/success-event.entity";
import { ErrorEvent } from "./error-event/entities/error-event.entity";

@Module({
  imports: [SuccessEventModule, ErrorEventModule, TypeOrmModule.forRoot({
	  type: 'mysql',
	  host: 'localhost',
	  port: 3306,
	  username: 'calculatrice',
	  password: 'calculatrice',
	  database: 'calculatrice',
	  entities: [SuccessEvent, ErrorEvent],
	  synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
