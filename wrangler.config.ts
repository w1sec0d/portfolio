import { defineWranglerConfig } from "wrangler/experimental-config";

export default defineWranglerConfig({
  // Astro emits the static site into ./dist.
  assetsDirectory: "./dist",
  // `cf build` runs this before packaging the assets.
  build: {
    command: "astro build",
  },
});
