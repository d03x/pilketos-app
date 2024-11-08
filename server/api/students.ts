import { students } from "~/db/students"
import db from "../misc/connection"
import { classes } from "~/db/classes";
import { eq } from "drizzle-orm";

export default defineEventHandler(async () => {
    let studentsData = await db().select()
        .from(students)
        .leftJoin(classes, eq(classes.id, students.classID)).where(eq(students.nisn, "23323"));
    return studentsData[0].students.name;
})