"use server";
import { neon } from "@neondatabase/serverless";

export async function getData() {
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL is not defined");
    }
    const sql = neon(process.env.DATABASE_URL);
    // Note: The user provided sql`...` as a placeholder. 
    // This action can be used for custom raw SQL queries if needed.
    const data = await sql`SELECT NOW()`;
    return data;
}
