import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const tasks = sqliteTable("tasks", {
	id: integer("id").primaryKey(),
	title: text("title"),
	description: text("description"),
});
