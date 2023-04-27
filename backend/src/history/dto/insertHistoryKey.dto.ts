import { IsNotEmpty } from 'class-validator';

export class InsertHistoryKeyDto {
  @IsNotEmpty()
  readonly key: string;
}
