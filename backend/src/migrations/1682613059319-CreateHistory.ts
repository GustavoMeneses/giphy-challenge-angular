import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateHistory1682613059319 implements MigrationInterface {
    name = 'CreateHistory1682613059319'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "history" ("id" SERIAL NOT NULL, "key" character varying NOT NULL, CONSTRAINT "PK_9384942edf4804b38ca0ee51416" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "history"`);
    }

}
