import { Hono } from 'hono'
import { cors } from 'hono/cors'

// アプリケーションの初期化
const app = new Hono()

// CORSミドルウェアの設定
app.use('*', cors())

// ルートエンドポイントの実装
app.get('/', (c) => {
  return c.json({
    message: 'Hello World from Hono API!',
    timestamp: new Date().toISOString()
  })
})

// APIエンドポイントの実装
app.get('/api/hello', (c) => {
  return c.json({
    message: 'Hello World from API endpoint!',
    timestamp: new Date().toISOString()
  })
})

// Cloudflare Workersにエクスポート
export default app
