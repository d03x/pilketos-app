import { boolean, mysqlTable, int, varchar } from "drizzle-orm/mysql-core";
export const classes = mysqlTable("classes", {
    id: int("id").primaryKey().autoincrement(),
    name: varchar({ length: 225 }),
    active: boolean("active").default(true),
});