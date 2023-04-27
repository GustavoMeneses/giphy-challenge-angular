import { Module } from '@nestjs/common';
import { HistoryController } from './history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryEntity } from './history.entity';
import { HistoryService } from './history.service';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryEntity])],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}
