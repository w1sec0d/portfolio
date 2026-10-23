import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    "name": "portfolio",
    "compatibilityDate": "2026-10-19",
    "domains": ["carlosramirez.app"],
    "observability": {
      "enabled": true
    },
    "assets": {
      "htmlHandling": "auto-trailing-slash",
      "notFoundHandling": "404-page"
    }
  }
});
