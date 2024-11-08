import { eq } from "drizzle-orm";
import { students } from "~/db/students";
import db from "~/server/misc/connection";

export default defineEventHandler(async (event) => {
    const { code } = await readBody(event);

    const student = (await db().select()
        .from(students)
        .where(eq(students.nisn, code))
        .orderBy(students.nisn))[0];
    if (!student) {
        setResponseStatus(event, 404);
        return {
            status: false,
            message: `Kode pemilihan ${code} tidak valid`
        }
    } else {
        setResponseStatus(event, 200);
        //jika
        return {
            status: true,
            message: "Oke Brow"
        }
    }
})