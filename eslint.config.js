import tslint from "typescript-eslint";
import react from "eslint-plugin-react";
import checkFile from "eslint-plugin-check-file";
import perfectionist from "eslint-plugin-perfectionist";

export default tslint.config(
  // tslint.configs.recommended,
  // tslint.configs.recommendedTypeChecked,
  {
    ignores: [
      "**/*.test.ts",
      "**/*.test.js",
      "*.config.[jt]s",
      "/**/*.d.ts",
      "dist",
      "node_modules",
    ],
  },
  //
  {
    files: [
      "libs/**/src/**/*.[jt]sx",
      "libs/**/src/**/*.[jt]s",
      "apps/**/src/**/*.[jt]sx",
      "apps/**/src/**/*.[jt]s",
    ],
    languageOptions: {
      ecmaVersion: "latest", //default latest
      sourceType: "module", // default module
      parser: tslint.parser,
      parserOptions: {
        project: ["./libs/design-system/tsconfig.json"],
        projectService: true, // for type checking in eslint
        tsconfigRootDir: import.meta.dirname, // for type checking in eslint
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      typescript: tslint.plugin,
      react,
      perfectionist,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/unbound-method": "off",
      "typescript/explicit-module-boundary-types": "off",
      "typescript/no-unused-vars": "error",
      "typescript/no-explicit-any": "warn",
      "typescript/no-var-requires": "warn", //disallow to use require for importing
      "typescript/explicit-function-return-type": "warn", // it force function that has return type
      "typescript/no-non-null-assertion": "warn", // disallow to use ! to assertion type
      "typescript/typedef": [
        "warn",
        {
          parameter: true,
          propertyDeclaration: true,
          variableDeclaration: true,
          memberVariableDeclaration: true,
          arrowParameter: true,
          // arrayDestructuring: true,
        },
      ], // required type definition
      "typescript/no-empty-function": [
        "error",
        {
          allow: ["constructors", "arrowFunctions"],
        },
      ],
      "typescript/consistent-type-exports": "error",
      "typescript/consistent-type-imports": [
        "error",
        {
          disallowTypeAnnotations: true,
          fixStyle: "separate-type-imports",
          prefer: "type-imports",
        },
      ],
      "typescript/max-params": ["error", { max: 3 }], // set number of props for function
      "typescript/no-floating-promises": "warn",
      "typescript/no-for-in-array": "error",
      "typescript/no-mixed-enums": "warn",
      "typescript/no-unnecessary-condition": "warn",
      "typescript/no-unnecessary-template-expression": "warn",
      "typescript/prefer-enum-initializers": "error",
      "typescript/promise-function-async": [
        "error",
        {
          allowAny: false,
        },
      ],
      "typescript/naming-convention": [
        "error",
        {
          selector: ["variable"],
          format: ["strictCamelCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },

        {
          selector: ["variable"],
          modifiers: ["destructured"],
          format: null,
        },
        {
          selector: ["variable"],
          format: ["UPPER_CASE", "StrictPascalCase", "strictCamelCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "forbid",
          modifiers: ["const"],
        },
        {
          selector: ["variable", "parameter"],
          types: ["boolean"],
          format: ["StrictPascalCase"],
          prefix: ["is", "should", "has", "can", "did", "will"],
        },
        {
          selector: ["function"],
          format: ["StrictPascalCase", "strictCamelCase"],
          leadingUnderscore: "forbid",
          trailingUnderscore: "forbid",
        },
        {
          selector: ["parameter"],
          format: ["strictCamelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: ["property", "parameterProperty"],
          types: ["boolean"],
          format: ["StrictPascalCase"],
          prefix: ["is", "should", "has", "can", "did", "will"],
          filter: {
            regex: "[- ]",
            match: false,
          },
        },
        {
          selector: ["property", "parameterProperty"],
          format: ["strictCamelCase", "UPPER_CASE"],
          filter: {
            regex: "[- ]",
            match: false,
          },
        },
        {
          selector: ["method"],
          format: ["strictCamelCase"],
        },
        {
          selector: ["typeAlias"],
          format: ["StrictPascalCase"],
          leadingUnderscore: "forbid",
          trailingUnderscore: "forbid",
          prefix: ["T"],
        },
        {
          selector: ["interface"],
          format: ["StrictPascalCase"],
          leadingUnderscore: "forbid",
          trailingUnderscore: "forbid",
          prefix: ["I"],
        },
        {
          selector: ["enum"],
          format: ["StrictPascalCase"],
          leadingUnderscore: "forbid",
          trailingUnderscore: "forbid",
          prefix: ["E"],
        },
        {
          selector: ["enumMember"],
          format: ["strictCamelCase", "StrictPascalCase"],
        },
      ],

      // @react plugin
      "react/hook-use-state": "warn",
      "react/jsx-boolean-value": "warn",
      // "react/jsx-closing-tag-location": "warn", // conflict with prettier
      "react/jsx-curly-spacing": ["warn", { when: "never", children: true }],
      "react/jsx-key": "warn",
      "react/jsx-newline": "warn",
      "react/jsx-no-target-blank": "warn",
      "react/jsx-props-no-multi-spaces": "warn",
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandFirst: true,
          multiline: "last",
        },
      ],
      "react/no-array-index-key": "warn",
      "react/self-closing-comp": "warn",
      // "react/jsx-one-expression-per-line": "warn", // conflict with prettier
      // "react/jsx-indent": ["warn", 2], // conflict with prettier

      // @sort
      "perfectionist/sort-imports": [
        "warn",
        {
          groups: [
            ["react", "next"],
            "mui",
            ["builtin", "external"],
            "internal",
            "hook",
            "pic",
            "style",
            ["external-type", "builtin-type", "internal-type", "index-type"],
            "object",
            "unknown",
          ],
          customGroups: {
            value: {
              react: ["^react$", "^react-.+", ".+-react$"],
              next: ["^next$", "^next[-/].+", ".+-next$"],
              mui: ["^@mui/.+"],
              hook: ["^~/.*(/hooks?|/use[A-Z]).*"],
              pic: [".+.(svg|jpg|webp|jpeg|png)"],
            },
          },
        },
      ],
    },
  },
  //  check folder name and file
  {
    ignores: [
      "apps/react-vite/src/**/main.tsx",
      "libs/design-system/**/*.d.ts",
    ],
    files: ["libs/**/src/**/*", "apps/**/src/**/*"],
    plugins: {
      "check-file": checkFile,
    },
    rules: {
      "check-file/folder-naming-convention": [
        "error",
        {
          "apps/**/src/**/": "NEXT_JS_APP_ROUTER_CASE",
          "libs/**/src/**/": "NEXT_JS_APP_ROUTER_CASE",
        },
      ],
      "check-file/filename-naming-convention": [
        "error",
        {
          "apps/**/src/**/*.[jt]sx": "(use)?*([A-Z]*([a-z0-9]))", // capture PASCAL_CASE and hook file that is started with use prefix
          "libs/**/src/**/*.[jt]sx": "(use)?*([A-Z]*([a-z0-9]))",
          // "src/**/*.[jt]sx": "PASCAL_CASE",
          "apps/**/src/**/*.[jt]s": "CAMEL_CASE",
          "libs/**/src/**/*.[jt]s": "CAMEL_CASE",
        },
      ],
    },
  }
);
