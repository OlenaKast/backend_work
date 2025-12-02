import {MigrationInterface, QueryRunner} from "typeorm";

export class FullUpdate1764665614626 implements MigrationInterface {
    name = 'FullUpdate1764665614626'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TYPE "public"."scripts_status_script_enum" AS ENUM(
                'чернетка',
                'схвалено',
                'відхилено',
                'доопрацювання'
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "scripts" (
                "id_script" SERIAL NOT NULL,
                "name_script" character varying(50) NOT NULL,
                "description_script" character varying(1500) NOT NULL,
                "date_script" TIMESTAMP NOT NULL DEFAULT now(),
                "file_script" character varying(255) NOT NULL,
                "status_script" "public"."scripts_status_script_enum" NOT NULL DEFAULT 'чернетка',
                "id_author" integer NOT NULL,
                CONSTRAINT "PK_49780810d3193fd45e9bcf778b7" PRIMARY KEY ("id_script")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "authors" DROP CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88"
        `);
        await queryRunner.query(`
            ALTER TABLE "authors" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "authors" DROP COLUMN "full_name"
        `);
        await queryRunner.query(`
            ALTER TABLE "authors" DROP COLUMN "email"
        `);
        await queryRunner.query(`
            ALTER TABLE "authors"
            ADD "id_author" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "authors"
            ADD CONSTRAINT "PK_409d379f22ff5535805aea2cb20" PRIMARY KEY ("id_author")
        `);
        await queryRunner.query(`
            ALTER TABLE "authors"
            ADD "fullname_author" character varying(100) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "authors"
            ADD "email_author" character varying(254) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "authors"
            ADD "password_author" character varying(60) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "authors"
            ADD "birth_author" date NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "authors"
            ADD "biography_author" character varying(500)
        `);
        await queryRunner.query(`
            ALTER TABLE "authors"
            ADD "country_author" character varying(100)
        `);
        await queryRunner.query(`
            ALTER TABLE "books"
            ADD "status_book" character varying(20) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "books"
            ADD "pages_number_book" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "books"
            ADD "id_script" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "books"
            ADD CONSTRAINT "UQ_a25c41c745428ad5ce0f608a076" UNIQUE ("id_script")
        `);
        await queryRunner.query(`
            ALTER TABLE "scripts"
            ADD CONSTRAINT "FK_d2e3f9e56597d29fb1a2847312c" FOREIGN KEY ("id_author") REFERENCES "authors"("id_author") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "books"
            ADD CONSTRAINT "FK_a25c41c745428ad5ce0f608a076" FOREIGN KEY ("id_script") REFERENCES "scripts"("id_script") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "books" DROP CONSTRAINT "FK_a25c41c745428ad5ce0f608a076"
        `);
        await queryRunner.query(`
            ALTER TABLE "scripts" DROP CONSTRAINT "FK_d2e3f9e56597d29fb1a2847312c"
        `);
        await queryRunner.query(`
            ALTER TABLE "books" DROP CONSTRAINT "UQ_a25c41c745428ad5ce0f608a076"
        `);
        await queryRunner.query(`
            ALTER TABLE "books" DROP COLUMN "id_script"
        `);
        await queryRunner.query(`
            ALTER TABLE "books" DROP COLUMN "pages_number_book"
        `);
        await queryRunner.query(`
            ALTER TABLE "books" DROP COLUMN "status_book"
        `);
        await queryRunner.query(`
            ALTER TABLE "authors" DROP COLUMN "country_author"
        `);
        await queryRunner.query(`
            ALTER TABLE "authors" DROP COLUMN "biography_author"
        `);
        await queryRunner.query(`
            ALTER TABLE "authors" DROP COLUMN "birth_author"
        `);
        await queryRunner.query(`
            ALTER TABLE "authors" DROP COLUMN "password_author"
        `);
        await queryRunner.query(`
            ALTER TABLE "authors" DROP COLUMN "email_author"
        `);
        await queryRunner.query(`
            ALTER TABLE "authors" DROP COLUMN "fullname_author"
        `);
        await queryRunner.query(`
            ALTER TABLE "authors" DROP CONSTRAINT "PK_409d379f22ff5535805aea2cb20"
        `);
        await queryRunner.query(`
            ALTER TABLE "authors" DROP COLUMN "id_author"
        `);
        await queryRunner.query(`
            ALTER TABLE "authors"
            ADD "email" character varying(254) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "authors"
            ADD "full_name" character varying(100) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "authors"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "authors"
            ADD CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            DROP TABLE "scripts"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."scripts_status_script_enum"
        `);
    }

}
