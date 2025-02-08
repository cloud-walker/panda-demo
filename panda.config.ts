import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  strictTokens: true,
  jsxStyleProps: "minimal",
  jsxFactory: "box",
  jsxFramework: "react",
  shorthands: true,
  separator: "_",
  syntax: "object-literal",

  // Where to look for your css declarations
  include: ["./src/**/*.{ts,tsx}"],

  // Files to exclude
  exclude: [],
  presets: [],

  conditions: {
    alpha: '[data-theme="alpha"] &',
    beta: '[data-theme="beta"] &',
    dark: '[data-mode="dark"] &',
    light: '[data-mode="light"] &',
  },

  globalCss: {
    body: {
      bg: "base",
    },
  },

  // Useful for theme customization
  theme: {
    semanticTokens: {
      colors: {
        base: {
          value: {
            base: "white",
            _dark: "black",
          },
        },
        accent: {
          value: {
            _alpha: { base: "blue", _dark: "lightblue" },
            _beta: { base: "purple", _dark: "fuchsia" },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
