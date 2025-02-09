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
  // dependencies: ["@pandacss/styled-system"],

  include: ['./src/**/*.{ts,tsx}'],
  exclude: [],
  // presets: ["@pandacss/preset-base"],

  conditions: {
    alpha: '[data-theme="alpha"] &',
    beta: '[data-theme="beta"] &',
    dark: '[data-mode="dark"] &',
    light: '[data-mode="light"] &',
  },

  globalVars: {
    '--font-ars': 'ArsMaquette, monospace',
  },
  globalFontface: {
    ArsMaquette: [
      {
        src: `url('/arsmaquettepro-regular.woff2') format('woff2')`,
        fontStyle: 'normal',
        fontWeight: 400,
        fontDisplay: 'swap',
      },
      {
        src: "url('/arsmaquettepro-medium.woff2') format('woff2')",
        fontStyle: 'normal',
        fontWeight: 500,
        fontDisplay: 'swap',
      },
      {
        src: "url('/arsmaquettepro-bold.woff2') format('woff2')",
        fontStyle: 'normal',
        fontWeight: 700,
        fontDisplay: 'swap',
      },
    ],
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: R.pipe(
          color,
          R.mapValues((v) => ({value: v}) as const),
        ),
        fonts: {
          ars: {
            value: 'var(--font-ars)',
          },
        },
      },
    },
    semanticTokens: {
      colors: {
        base: {
          raised: {
            value: {
              _light: 'white',
              _dark: '{colors.grey1400}',
            },
          },
          sunken: {
            value: {
              _light: '{colors.grey50}',
              _dark: 'black',
            },
          },
          DEFAULT: {
            value: {
              _light: 'white',
              _dark: '{colors.grey1500}',
            },
          },
        },
        fill: {
          neutral: {
            primary: {
              value: {
                _light: '{colors.grey1300}',
                _dark: 'white',
              },
            },
          },
          accent: {
            primary: {
              value: {
                _alpha: {
                  _light: '{colors.blue1100}',
                  _dark: '{colors.blue800}',
                },
                _beta: {
                  _light: '{colors.purple1100}',
                  _dark: '{colors.purple800}',
                },
              },
            },
          },
        },
        text: {
          neutral: {
            DEFAULT: {
              value: {
                _light: '{colors.grey1300}',
                _dark: 'white',
              },
            },
            on: {
              neutral: {
                value: {
                  _light: 'white',
                  _dark: 'black',
                },
              },
              accent: {
                value: {
                  _light: 'white',
                  _dark: 'white',
                },
              },
            },
          },
          accent: {
            value: {
              _alpha: {
                _light: '{colors.blue1100}',
                _dark: '{colors.blue500}',
              },
              _beta: {
                _light: '{colors.purple1100}',
                _dark: '{colors.purple500}',
              },
            },
          },
        },
        border: {
          neutral: {
            tertiary: {
              alpha: {
                value: '{colors.blackAlpha100}',
              },
            },
          },
        },
        shadow: {
          neutral: {
            1: {
              value: {
                _light: '{colors.blackAlpha100}',
                _dark: '{colors.blackAlpha600}',
              },
            },
            2: {
              value: {
                _light: '{colors.blackAlpha200}',
                _dark: '{colors.blackAlpha800}',
              },
            },
          },
        },
      },
    },
  },

  globalCss: defineGlobalStyles({
    ':root': {
      fontFamily: 'ArsMaquette',
    },
    'html, body': {
      h: '100%',
    },
    body: {
      bg: 'base.sunken',
      color: 'text.neutral',
    },
  }),

  // patterns: {},
})
