import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
	plugins: [vue()],
	base: "./",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	root: "./src",
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "./src/scss/util/util.scss" as *;', // グローバルなscss
			},
		},
	},
});
