import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateContacts1677116270425 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "contacts",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "id_person",
            type: "int",
            isNullable: false,
          },
          {
            name: "whatsapp",
            type: "varchar",
          },
          {
            name: "phone",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("contacts");
  }
}
