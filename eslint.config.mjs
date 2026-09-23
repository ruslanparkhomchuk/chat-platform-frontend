import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier/flat";
import globals from "globals";

export default defineConfig([
	globalIgnores(["dist", "coverage", "src/gql"]),

	js.configs.recommended,
	tseslint.configs.recommended,
	react.configs.flat.recommended,
	react.configs.flat["jsx-runtime"],
	reactHooks.configs.flat.recommended,

	{
		languageOptions: {
			globals: globals.browser,
		},
		settings: {
			react: { version: "detect" },
		},
		rules: {
			"react/no-unknown-property": ["error", { ignore: ["css"] }],
		},
	},

	prettier,
]);
