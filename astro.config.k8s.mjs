// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Static output config for Docker/K8s deployment (no Cloudflare adapter)
export default defineConfig({
	site: "https://example.com",
	output: "static",
	integrations: [mdx(), sitemap()],
});
