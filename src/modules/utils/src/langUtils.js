/* eslint-disable import/prefer-default-export */

export function spliced(...args: Array<*>): Array<*> {
    // Returns the array of values deleted from array.
  Array.prototype.splice.apply(this, args)
    // Return current (mutated) array array reference.
  return(this)
}


export function joinArrayWithSeperator(sep: string, arr: Array<string>): string {
  let result = ''
  arr.forEach((a: string, i: number) => {
    if(i === 0) {
      result += a
    } else {
      result += `${sep}${a}`
    }
  })
  return result
}
