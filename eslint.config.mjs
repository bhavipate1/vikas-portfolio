import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    "**/.next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Orphaned Figma-to-Code export scaffolds, not part of the live site.
    "about-page-nextjs/**",
    "advisory-nextjs/**",
    "contact-nextjs/**",
    "homepage-nextjs/**",
    "newsletter-nextjs/**",
    "speaker-page-nextjs/**",
  ]),
]);

export default eslintConfig;
