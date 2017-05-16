/* Math Utilities | planetx-utils-math */
// @flow


export function RandomBetween(minimum: number, maximum: number): number {
  const min = Math.ceil(minimum)
  const max = Math.floor(maximum)
  return Math.floor(Math.random() * (max - min)) + min
}

// export const OneSecondInMs = '000'

// export function NumberSignificance(num: number, n: number) {
//   const a = Math.abs(num) // Absolute value of number
//   const la = Math.log(a) / Math.LN10 // Log10 of absolute value
//   const ld = (Math.floor(la) % 3) + 1 // Digits to the left of .
//   if (ld >= n) { return numeral(num).format('0a') }
//   const rd = n - ld // Digital to the right of .

//     // Build format string... (TypeScript doesn't allow string*number)
//   let fmt = '0.'
//   for(let i = 0; i < rd; i++) {
//     fmt = `${fmt}0`
//   }
//   fmt = `${fmt}a`

//   return numeral(num).format(fmt)
// }
