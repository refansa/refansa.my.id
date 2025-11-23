import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import eslintPluginGithub from 'eslint-plugin-github'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginPrimerReact from 'eslint-plugin-primer-react'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'

const eslintConfig = defineConfig([
  ...nextVitals,

  // Base configuration for all files
  {
    plugins: {
      github: eslintPluginGithub,
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Import rules (plugin already defined in nextVitals)
      'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-namespace': 'off',
      'import/no-anonymous-default-export': 'off',
      'import/no-named-as-default': 'off',

      // General ESLint rules
      'no-console': 'off',
      camelcase: 'off',
      'no-shadow': 'off',
      'prefer-template': 'off',
      'no-constant-condition': 'off',
      'no-unused-vars': 'off',
      'one-var': 'off',
      'object-shorthand': 'off',
      'no-empty': 'off',
      'prefer-const': 'off',
      'no-useless-concat': 'off',
      'func-style': 'off',

      // GitHub plugin rules
      'github/array-foreach': 'off',
      'github/no-then': 'off',

      // i18n-text rules (from GitHub plugin)
      'i18n-text/no-en': 'off',

      // filenames rules (from GitHub plugin)
      'filenames/match-regex': 'off',

      // eslint-comments rules (from GitHub plugin)
      'eslint-comments/no-use': 'off',
      'eslint-comments/no-unused-disable': 'off',
      'eslint-comments/no-unlimited-disable': 'off',

      // Prettier rules
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },

  // TypeScript-specific configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      'primer-react': eslintPluginPrimerReact,
    },
    rules: {
      // TypeScript rules (parser and @typescript-eslint plugin already in nextVitals)
      camelcase: 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-unused-vars': 'error',

      // jsx-a11y rules (already included in nextVitals, just override specific ones)
      'jsx-a11y/no-onchange': 'off',
    },
  },

  // Prettier config to disable conflicting rules
  prettierConfig,

  // Global ignores
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'tmp/**']),
])

export default eslintConfig
