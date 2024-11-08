import { mysqlTable, mysqlSchema, AnyMySqlColumn, int, text, varchar, foreignKey } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const candidate = mysqlTable("candidate", {
	id: int().autoincrement().notNull(),
	number: int().default('NULL'),
	description: text().default(''''''),
	name: varchar({ length: 225 }).notNull(),
	vision: text().default(''''''),
	mision: text().default(''''''),
	workProgram: text("work_program").default('NULL'),
	image: varchar({ length: 225 }).notNull(),
	video: varchar({ length: 225 }).default('NULL'),
});

export const classes = mysqlTable("classes", {
	id: int().autoincrement().notNull(),
	name: varchar({ length: 225 }).default('NULL'),
	active: tinyint().default(1),
});

export const students = mysqlTable("students", {
	nisn: varchar({ length: 10 }).notNull(),
	name: varchar({ length: 225 }).default('NULL'),
	classId: int("class_id").default('NULL').references(() => classes.id),
});
