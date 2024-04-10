import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres"
import { migrate } from "drizzle-orm/node-postgres/migrator"

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'twitterClone',
    password: 'postgres',
    port: 9000
})
const db = drizzle(pool)

async function main(){
    console.log("migration startet...")
    await migrate(db, {migrationsFolder:"drizzle"} )
    console.log("migration finished")
    process.exit(0)
}

main().catch((err) => {
    console.log(err); 
    process.exit(0);
})