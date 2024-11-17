import { error } from 'console';
import * as dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';

dotenv.config({
    path: './.env.local'
})

if (typeof process.env.DATABASE_URL !== "string"){
    throw new Error("need to set your pg database.")
}

export default defineConfig({
  out: '.src/db/migrations',
  schema: './src/db/schema.ts', 
  dialect: 'postgresql',
  dbCredentials: {
    url: String(process.env.DATABASE_URL),
  },
});
