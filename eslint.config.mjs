import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Ignore folders or files completely
  {
    ignores: [
      "node_modules",
      ".next",
      "dist",
      "src/generated/prisma/**", // ✅ Ignore Prisma-generated files
    ],
  },

  // Extend Next.js and TypeScript rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Apply custom rules globally
  ...compat.config({
    extends: ["next"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  }),

  // Optional: override rules for specific files instead of ignoring
  {
    files: ["src/generated/prisma/**/*.{js,ts}"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
];

export default eslintConfig;
