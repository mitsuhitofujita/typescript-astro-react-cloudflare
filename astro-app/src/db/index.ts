import { drizzle } from "drizzle-orm/d1";
import { greetings } from "./schema";

// Astro環境からD1データベースにアクセスする関数
interface Env {
	D1DB: D1Database;
}

export function getDB(env: Env) {
	return drizzle(env.D1DB);
}

// 商品一覧を取得する関数
export async function getGreetings(env: Env) {
	const db = getDB(env);
	return db.select().from(greetings).all();
}

// 商品詳細を取得する関数
// export async function getGreetingById(env: Env, id: number) {
// 	const db = getDB(env);
// 	return db.select().from(greetings).where({ id }).get();
// }

// 商品を作成する関数
export async function createGreeting(env: Env, data: { message: string }) {
	const db = getDB(env);
	return db.insert(greetings).values(data).returning().get();
}
