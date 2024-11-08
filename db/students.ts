import { mysqlTable, int, varchar } from "drizzle-orm/mysql-core";
import { classes } from "./classes";
import { relations } from "drizzle-orm";
export const students = mysqlTable("students", {
    nisn: varchar({ length: 10 }).primaryKey(),
    name: varchar({ length: 225 }),
    classID: int("class_id").references(() => classes.id),
});
