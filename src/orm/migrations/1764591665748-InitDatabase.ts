import {MigrationInterface, QueryRunner} from "typeorm";

export class InitDatabase1764591665748 implements MigrationInterface {
    name = 'InitDatabase1764591665748'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "genres" (
                "id_genre" SERIAL NOT NULL,
                "name_genre" character varying(30) NOT NULL,
                "description_genre" character varying(200),
                CONSTRAINT "PK_a23a4b045d219ffd740729209d3" PRIMARY KEY ("id_genre")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "books" (
                "id" SERIAL NOT NULL,
                "title" character varying(50) NOT NULL,
                "isbn" character varying(13) NOT NULL,
                "year" integer NOT NULL,
                "price" numeric(8, 2),
                "author_id" integer NOT NULL,
                "genre_id" integer,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "authorId" integer,
                "genreId" integer,
                CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "authors" (
                "id" SERIAL NOT NULL,
                "full_name" character varying(100) NOT NULL,
                "email" character varying(254) NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "employees" (
                "id_employee" SERIAL NOT NULL,
                "fullname_employee" character varying(100) NOT NULL,
                "post_employee" character varying(30) NOT NULL,
                "phone_employee" character varying(10) NOT NULL,
                "email_employee" character varying(254) NOT NULL,
                "date_hire_employee" TIMESTAMP NOT NULL,
                CONSTRAINT "PK_b9bd6c02b7e061e4b5398ddadd6" PRIMARY KEY ("id_employee")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "typography" (
                "id_typography" SERIAL NOT NULL,
                "name_typography" character varying(50) NOT NULL,
                "contact_typography" character varying(100) NOT NULL,
                "phone_typography" character varying(10) NOT NULL,
                "email_typography" character varying(254) NOT NULL,
                CONSTRAINT "PK_d8967d42d4acf9578ca39f28332" PRIMARY KEY ("id_typography")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "users" (
                "id" SERIAL NOT NULL,
                "email" character varying NOT NULL,
                "password" character varying NOT NULL,
                "username" character varying,
                "name" character varying,
                "role" character varying(30) NOT NULL DEFAULT 'STANDARD',
                "language" character varying(15) NOT NULL DEFAULT 'en-US',
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
                CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"),
                CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "books"
            ADD CONSTRAINT "FK_54f49efe2dd4d2850e736e9ab86" FOREIGN KEY ("authorId") REFERENCES "authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "books"
            ADD CONSTRAINT "FK_331478ffd59f87a68b1255b2b6a" FOREIGN KEY ("genreId") REFERENCES "genres"("id_genre") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "books" DROP CONSTRAINT "FK_331478ffd59f87a68b1255b2b6a"
        `);
        await queryRunner.query(`
            ALTER TABLE "books" DROP CONSTRAINT "FK_54f49efe2dd4d2850e736e9ab86"
        `);
        await queryRunner.query(`
            DROP TABLE "users"
        `);
        await queryRunner.query(`
            DROP TABLE "typography"
        `);
        await queryRunner.query(`
            DROP TABLE "employees"
        `);
        await queryRunner.query(`
            DROP TABLE "authors"
        `);
        await queryRunner.query(`
            DROP TABLE "books"
        `);
        await queryRunner.query(`
            DROP TABLE "genres"
        `);
    }

}
