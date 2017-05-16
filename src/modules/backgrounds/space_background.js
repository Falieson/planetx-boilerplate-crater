/* Space: Random Stars - canvas generated background | planetx-backgrounds
  - [ ] standard star colors
  - [/] rainbow stars
  - [/] expansion/retraction
  - [~] big-bang / big-shrink
  - [ ] super-nova
  - [ ] flow

  Inspired by generateStar() by https://codepen.io/alexandredees/pen/wseEi
*/

/* eslint flowtype/require-parameter-type:0 */
/* eslint flowtype/require-return-type:0 */
/* eslint no-confusing-arrow:0 */


import type { ReEl } from 'planetx'

import React from 'react'
import $ from 'jquery'
import { mathUtil as Utils } from '../utils/'
// import { reduxUtil } from '../../utils/'

const { RandomBetween } = Utils

import styles from './space_background.css'

const randomRgbaColor = ({ alpha }) => `rgba(${RandomBetween(0, 255)}, ${RandomBetween(0, 255)}, ${RandomBetween(0, 255)}, ${alpha})`

const randomTimeoutBetweenSeconds = (min: number, max: number): number => parseInt(`${RandomBetween(min, max)}000`, 10)
const timeController = 15 // controlledTimeout's global alpha
function controlledTimer(isInterval = false, func, fargs, secs, alpha = timeController) {
  if(isInterval) {
    return setInterval(() =>
      Array.isArray(fargs) ? func(...fargs) : func(fargs), ((secs / alpha) >= 1 ? (secs / alpha) : 1))
  }
  return setTimeout(() =>
    Array.isArray(fargs) ? func(...fargs) : func(fargs), ((secs / alpha) >= 1 ? (secs / alpha) : 1))
}

function controlledInterval(func, fargs, secs, alpha = timeController) {
  return controlledTimer(true, func, fargs, secs, alpha)
}
function controlledTimeout(func, fargs, secs, alpha = timeController) {
  return controlledTimer(false, func, fargs, secs, alpha)
}

const generateSpaceBackground = () => {
  const generatePhaseShift = (): string => randomRgbaColor({ alpha: 0.5 }) // `rgba(${RandomBetween(0, 255)}, ${RandomBetween(0, 255)}, ${RandomBetween(0, 255)}, 0.5)`
  const generateStarAmplitude = (): number => RandomBetween(4, 9)
  const generateStarHeat = (): string => randomRgbaColor({ alpha: 1 })
  const generateStarSize = (): number => RandomBetween(3, 7)


  // => Begin generating stars or blackholes
  function generateStellarBodies({
    canvas,
    context: ctx,
    fillStyle,
    shadowColor,
    shadowBlur,
    globalCompositeOperation = 'source-over',
    growBody = true,
    ciels,
    mod,
    starSizeCuber
  }: {
    canvas: Object,
    context: Object,
    fillStyle?: string,
    shadowColor?: string,
    shadowBlur?: number,
    globalCompositeOperation?: string,
    growBody?: boolean,
    starSizeCuber?: Function,
    ciels: Object,
    mod: number,
  }) {
    function generateBody() {
      ctx.beginPath()
      const starRadius = (() => {
        if(starSizeCuber) {
          const blackholeRads = starSizeCuber(generateStarSize())

          // superblackhole?
          // blackholeRads = (() => {
          //   const birthDeathPoint = 20

          //   const reverseMod = 100 - mod
          //   const t = (mod >= 50 && ((reverseMod) < birthDeathPoint))
          //     || (mod < 50 && (mod < birthDeathPoint))

          //   // return t ? Math.pow(blackholeRads, mod % 4) : blackholeRads
          // })()

          return blackholeRads
        }
        return generateStarSize()
      })()

      // console.log(starSizeCuber ? 'blackhole' : 'star', ' radius: ', { starRadius })

      // randomly position
      const starProps = {
        x     : starRadius + (Math.random() * canvas.width),
        y     : starRadius + (Math.random() * canvas.height),
        r     : starRadius * Math.random(),
        sAngle: 0,
        eAngle: Math.PI * 2,
        ccw   : false
      }
      ctx.arc(...Object.keys(starProps).map(p => starProps[p]))

      ctx.globalCompositeOperation = globalCompositeOperation


      ctx.fillStyle = fillStyle || generateStarHeat()
      ctx.shadowColor = shadowColor || generatePhaseShift()
      ctx.shadowBlur = shadowBlur || generateStarAmplitude()
      ctx.fill()
    }

    const birthRate = growBody ? ((mod % 50) + 25) : (75 - (mod % 50))
    // console.log({ growBody, birthRate, mod, t: !growBody && mod >= 50, m5: mod % 50, m25: (mod % 50) + 25, m75: 75 - (mod % 50) })

    // *= generate a star every birthRate
    const newBodySet = controlledInterval(generateBody, ctx, birthRate, timeController)

    // <= Stop generating stars after a random number of seconds
    const { min: resetMin, max: resetMax } = ciels
    controlledTimeout(
      clearInterval, newBodySet, randomTimeoutBetweenSeconds(resetMin, resetMax), timeController
    )
  }

  function expansion(v: number, x: number): number {
    const expand = (): number => v * ((v + x) / v)
    const shrink = (): number => v * ((v - x < 0 ? 1 : v - x) / v)


    if(x >= 50) {
      return shrink()
    }

    return expand()
  }

  function generateUniverse(canvas: Object, context: Object, x: number=0) {
    const mod = x % 100
    const reversedMod = 100 - mod

    const starCiels = (() => {
      const defaults = { min: 7, max: 15 }

      return {
        min: expansion(defaults.min, x),
        max: expansion(defaults.max, x)
      }
    })()
    const holeCiels = (() => {
      const defaults = { min: 7 * 0.75, max: 15 * 1.35 }

      return {
        min: expansion(defaults.min, reversedMod),
        max: expansion(defaults.max, reversedMod)
      }
    })()
    const resetCiels = (() => {
      const defaults = { min: 15, max: 15 * 2 }

      return {
        min: expansion(defaults.min, x),
        max: expansion(defaults.max, x)
      }
    })()

    // Stars
    generateStellarBodies({ canvas, context, ciels: starCiels, mod })

    // Blackholes
    generateStellarBodies({
      canvas,
      context,
      fillStyle               : 'rgba(0, 0, 0, 1)',
      globalCompositeOperation: 'destination-out',
      ciels                   : holeCiels,
      mod,
      starSizeCuber           : s => s ** (0.1 + Math.random() + Math.random())
    })

    // ^= RESTART generating universe
    controlledTimeout(
      generateUniverse,
      [canvas, context, x + 1],
      randomTimeoutBetweenSeconds(resetCiels.min, resetCiels.max),
      timeController
    )
  }

  $(() => {
    const canvas = document.getElementById('px_space_bg')
    const context = canvas.getContext('2d')

    const onresize = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
    }
    onresize()

    generateUniverse(canvas, context)
  })
}

function CanvasSpaceBackground(): ReEl {
  generateSpaceBackground()

  return (
    <canvas id="px_space_bg" className={styles.canvasBG} />
  )
}

export default CanvasSpaceBackground
