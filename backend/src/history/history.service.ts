import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoryEntity } from './history.entity';
import { Repository } from 'typeorm';
import { InsertHistoryKeyDto } from './dto/insertHistoryKey.dto';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(HistoryEntity)
    private readonly historyRepository: Repository<HistoryEntity>,
  ) {}

  async insertHistoryKey(insertHistoryKeyDto: InsertHistoryKeyDto) {
    const newKey = new HistoryEntity();
    Object.assign(newKey, insertHistoryKeyDto);
    return await this.historyRepository.save(newKey);
  }

  async getHistory() {
    return await this.historyRepository.find();
  }

  async clearHistory() {
    return await this.historyRepository.createQueryBuilder().delete().execute();
  }
}
