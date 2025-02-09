import {defineConfig, defineGlobalStyles} from '@pandacss/dev'
import * as R from 'remeda'
import {color} from './color'

export default defineConfig({
  preflight: true,
  strictTokens: true,
  jsxStyleProps: 'minimal',
  jsxFactory: 'box',
  jsxFramework: 'react',
  shorthands: true,
  separator: '_',
  syntax: 'object-literal',
  outdir: 'styled-system',

  include: ['./src/**/*.{ts,tsx}'],
  exclude: [],
  presets: [],

  conditions: {
    alpha: '[data-theme="alpha"] &',
    beta: '[data-theme="beta"] &',
    dark: '[data-mode="dark"] &',
    light: '[data-mode="light"] &',
  },

  // Useful for theme customization
  theme: {
    tokens: {
      colors: R.pipe(
        color,
        R.mapValues((v) => ({value: v} as const)),
      ),
    },
    semanticTokens: {
      colors: {
        base: {
          raised: {
            value: {
              base: 'white',
              _dark: '{colors.grey1400}',
            },
          },
          sunken: {
            value: {
              base: '{colors.grey50}',
              _dark: 'black',
            },
          },
          DEFAULT: {
            value: {
              base: 'white',
              _dark: '{colors.grey1500}',
            },
          },
        },
        text: {
          neutral: {
            DEFAULT: {
              value: {
                base: '{colors.grey1300}',
                _dark: 'white',
              },
            },
          },
        },
        shadow: {
          neutral: {
            1: {
              value: {
                base: '{colors.blackAlpha100}',
                _dark: '{colors.blackAlpha600}',
              },
            },
            2: {
              value: {
                base: '{colors.blackAlpha200}',
                _dark: '{colors.blackAlpha800}',
              },
            },
          },
        },
        accent: {
          value: {
            _alpha: {base: 'blue', _dark: 'lightblue'},
            _beta: {base: 'purple', _dark: 'fuchsia'},
          },
        },
      },
    },
  },

  globalCss: defineGlobalStyles({
    'html, body': {
      h: '100%',
    },
    body: {
      bg: 'base.sunken',
      color: 'text.neutral',
    },
  }),
})
