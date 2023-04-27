import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { InsertHistoryKeyDto } from './dto/insertHistoryKey.dto';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async insertHistoryKey(@Body() insertHistoryKeyDto: InsertHistoryKeyDto) {
    return await this.historyService.insertHistoryKey(insertHistoryKeyDto);
  }

  @Get('all')
  async getHistory() {
    return await this.historyService.getHistory();
  }

  @Delete()
  async clearHistory() {
    return await this.historyService.clearHistory();
  }
}
