import { boolean, mysqlTable, int, varchar, text } from "drizzle-orm/mysql-core";
export const candidate = mysqlTable("candidate", {
    id: int("id").primaryKey().autoincrement(),
    number: int(),
    description: text("description").default(""),
    name: varchar({ length: 225 }).notNull(),
    vision: text().default(""),
    mision: text().default(""),
    workProgram: text("work_program"),
    image: varchar({ length: 225 }).notNull(),
    video: varchar({ length: 225 }),
});