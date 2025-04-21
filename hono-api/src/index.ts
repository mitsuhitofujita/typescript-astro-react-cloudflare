import { fromHono } from "chanfana";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { TaskCreate } from "./endpoints/taskCreate";
import { TaskDelete } from "./endpoints/taskDelete";
import { TaskFetch } from "./endpoints/taskFetch";
import { TaskList } from "./endpoints/taskList";

// 環境変数の型定義
interface Env {
	API_ORIGIN: string;
}

// Start a Hono app
const app = new Hono<{ Bindings: Env }>();

// CORS ミドルウェアを http://localhost:4321 のみ許可する設定に変更
app.use("*", (c, next) => {
	if (typeof c.env.API_ORIGIN === "undefined") {
		throw new Error("API_ORIGIN is not defined");
	}

	// 動的にCORS設定を適用
	return cors({
		origin: c.env.API_ORIGIN,
	})(c, next);
});

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/",
});

// Register OpenAPI endpoints
openapi.get("/api/tasks", TaskList);
openapi.post("/api/tasks", TaskCreate);
openapi.get("/api/tasks/:taskSlug", TaskFetch);
openapi.delete("/api/tasks/:taskSlug", TaskDelete);

// Export the Hono app
export default app;
