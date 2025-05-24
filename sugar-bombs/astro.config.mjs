// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import react from "@astrojs/react";

import UnoCSS from "@unocss/astro";

// https://astro.build/config
export default defineConfig({
	output: "server", // SSRモードを有効化
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),

	integrations: [react(), UnoCSS()],

	// Use react-dom/server.edge instead of react-dom/server.browser for React 19.
	// Without this, MessageChannel from node:worker_threads needs to be polyfilled.
	vite: {
		resolve: {
			alias: {
				"react-dom/server": "react-dom/server.edge",
			},
		},
	},
});
