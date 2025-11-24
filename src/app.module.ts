import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './user.service';

@Module({
  imports: [UsersService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
