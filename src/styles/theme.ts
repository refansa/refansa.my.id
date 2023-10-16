'use client'

import {
  CSSVariablesResolver,
  MantineColorsTuple,
  createTheme,
} from '@mantine/core'
import { fluidDisplay, fluidTypography } from '../utils/typography'
import { Button, Text, TextInput, Textarea, Title } from './extends'

const coffee: MantineColorsTuple = [
  '#fff4e5',
  '#f4e7d8',
  '#e5cfb5',
  '#d4b590',
  '#c59e6f',
  '#bd905a',
  '#ba894f',
  '#a3763e',
  '#926835',
  '#805928',
]

export const theme = createTheme({
  // Controls focus ring styles. Supports the following options:
  // - `auto` – focus ring is displayed only when the user navigates with keyboard (default value)
  // - `always` – focus ring is displayed when the user navigates with keyboard and mouse
  // - `never` – focus ring is always hidden (not recommended)
  //
  focusRing: 'auto',

  // rem units scale, change if you customize font-size of `<html />` element
  // default value is `1` (for `100%`/`16px` font-size on `<html />`)
  //
  scale: 1,

  // Determines whether `font-smoothing` property should be set on the body, `true` by default
  fontSmoothing: true,

  //   White color
  white: '#ffffff',

  // Black color
  black: '#000000',

  // Object of colors, key is color name, value is an array of at least 10 strings (colors)
  colors: {
    coffee,
  },

  // Index of theme.colors[color].
  // Primary shade is used in all components to determine which color from theme.colors[color] should be used.
  // Can be either a number (0–9) or an object to specify different color shades for light and dark color schemes.
  // Default value `{ light: 6, dark: 8 }`
  //
  // For example,
  // { primaryShade: 6 } // shade 6 is used both for dark and light color schemes
  // { primaryShade: { light: 6, dark: 7 } } // different shades for dark and light color schemes
  //
  primaryShade: { light: 4, dark: 8 },

  // Key of `theme.colors`, hex/rgb/hsl values are not supported.
  // Determines which color will be used in all components by default.
  // Default value – `blue`.
  //
  primaryColor: 'coffee',

  // Function to resolve colors based on variant.
  // Can be used to deeply customize how colors are applied to `Button`, `ActionIcon`, `ThemeIcon`
  // and other components that use colors from theme.
  //
  // variantColorResolver: VariantColorsResolver;

  // font-family used in all components, system fonts by default
  fontFamily:
    'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',

  // Monospace font-family, used in code and other similar components, system fonts by default
  fontFamilyMonospace:
    'Fira Code, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',

  // Controls various styles of h1-h6 elements, used in TypographyStylesProvider and Title components
  headings: {
    fontFamily:
      'Gabarito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  },

  // Object of values that are used to set `border-radius` in all components that support it
  // radius: MantineRadiusValues;

  // Key of `theme.radius` or any valid CSS value. Default `border-radius` used by most components
  defaultRadius: 0,

  // Object of values that are used to set various CSS properties that control spacing between elements
  // spacing: MantineSpacingValues;

  // Object of values that are used to control `font-size` property in all components
  fontSizes: {
    'fluid-xs': fluidTypography(8, 12, 480, 1440),
    'fluid-sm': fluidTypography(10, 14, 480, 1440),
    'fluid-md': fluidTypography(12, 16, 480, 1440),
    'fluid-lg': fluidTypography(14, 18, 480, 1440),
    'fluid-xl': fluidTypography(16, 20, 480, 1440),
    'display-xl': fluidDisplay(80, 144, 768, 1920),
    'display-lg': fluidDisplay(24, 36, 768, 1920),
    'display-md': fluidDisplay(16, 24, 768, 1920),
  },

  // Object of values that are used to control `line-height` property in `Text` component
  // lineHeights: MantineLineHeightValues;

  // Object of values that are used to control breakpoints in all components,
  // values are expected to be defined in em
  //
  // breakpoints: MantineBreakpointsValues;

  // Object of values that are used to add `box-shadow` styles to components that support `shadow` prop
  // shadows: MantineShadowsValues;

  //  Determines whether user OS settings to reduce motion should be respected, `false` by default
  // respectReducedMotion: boolean;

  //  Determines which cursor type will be used for interactive elements
  // - `default` – cursor that is used by native HTML elements, for example, `input[type="checkbox"]` has `cursor: default` styles
  // - `pointer` – sets `cursor: pointer` on interactive elements that do not have these styles by default
  //
  cursorType: 'pointer',

  // Default gradient configuration for components that support `variant="gradient"`
  // defaultGradient: MantineGradient;

  // Class added to the elements that have active styles, for example, `Button` and `ActionIcon`
  // activeClassName: string;

  // Class added to the elements that have focus styles, for example, `Button` or `ActionIcon`.
  // Overrides `theme.focusRing` property.
  //
  // focusClassName: string;

  // Allows adding `classNames`, `styles` and `defaultProps` to any component
  components: {
    Button,
    Text,
    Textarea,
    TextInput,
    Title,
  },

  // Any other properties that you want to access with the theme objects
  other: {
    bodyLight: '#ffffff',
    textLight: '#000000',
    bodyDark: '#000000',
    textDark: '#ffffff',
  },
})

export const resolver: CSSVariablesResolver = (t) => ({
  variables: {},
  light: {
    '--mantine-color-body': t.other.bodyLight,
    '--mantine-color-text': t.other.textLight,
  },
  dark: {
    '--mantine-color-body': t.other.bodyDark,
    '--mantine-color-text': t.other.textDark,
  },
})
