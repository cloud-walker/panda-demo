import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import panda from '@pandacss/eslint-plugin'

export default tseslint.config(
  {ignores: ['dist']},
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],
    },
  },
  // {
  //   files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  //   ignores: ["**/*.d.ts", "styled-system"],
  //   plugins: {
  //     "@pandacss": panda,
  //   },
  //   rules: {
  //     // You can also use the recommended rules
  //     ...panda.configs.recommended.rules,
  //   },
  // }
)
