import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Original HTML template and its static assets
    "template/**",
    "public/**",
  ]),
  {
    // The template's CSS sizes images itself, so plain <img> tags are used on purpose.
    rules: { "@next/next/no-img-element": "off" },
  },
]);

export default eslintConfig;
