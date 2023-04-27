import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'history' })
export class HistoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key: string;
}
