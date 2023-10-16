export const PIXEL_PER_REM = 16

/**
 * Returns a number from pixel to rem.
 *
 * @param value The value in pixel.
 */
export const rem = (value: number): number => {
  return value / PIXEL_PER_REM
}

/**
 * Returns a string of calculated value used for font size in display typography.
 *
 * Formula based from https://github.com/abdulrcs/abdulrahman.id/blob/main/styles/theme.js
 *
 * @param minFont Minimal font size in pixel.
 * @param maxFont Maximum font size in pixel.
 * @param minVW Minimum font size in pixel.
 * @param maxVW Maximum font size in pixel.
 */
export const fluidDisplay = (
  minFont: number,
  maxFont: number,
  minVW: number,
  maxVW: number,
) => {
  let XX = minVW / 100
  let YY = (100 * (maxFont - minFont)) / (maxVW - minVW)
  let ZZ = rem(minFont)
  return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`
}

/**
 * Returns a string of clamp value used for font size in normal typography.
 *
 * Formula based from https://www.aleksandrhovhannisyan.com/blog/fluid-type-scale-with-css-clamp/
 *
 * @param minFont Minimal font size in pixel.
 * @param maxFont Maximum font size in pixel.
 * @param minVW Minimum font size in pixel.
 * @param maxVW Maximum font size in pixel.
 */
export const fluidTypography = (
  minFont: number,
  maxFont: number,
  minVW: number,
  maxVW: number,
): string => {
  const slope = (maxFont - minFont) / (maxVW - minVW)
  const intercept = rem(minFont - slope * minVW)
  const slopeVW = slope * 100

  const minSize = rem(minFont)
  const maxSize = rem(maxFont)

  return `clamp(${minSize}rem, ${slopeVW}vw + ${intercept}rem, ${maxSize}rem)`
}
