import { drizzle } from "drizzle-orm/mysql2";

export default function db(){
    return   drizzle(process.env.DATABASE_URL!)
}