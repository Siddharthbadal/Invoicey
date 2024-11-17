import { pgEnum, integer, pgTable, serial, timestamp, text } from "drizzle-orm/pg-core";

export const statusEnum = pgEnum('status', ['open', 'paid','void','untraced', 'pending'])

export const Invoices = pgTable("invoices", {
    id: serial('id').primaryKey().notNull(),
    createTs: timestamp('createTs').defaultNow().notNull(),
    status:statusEnum('status').notNull(),
    value : integer('value').notNull(),
    description : text('description').notNull(),

});