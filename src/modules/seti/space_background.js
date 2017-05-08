/* seti bg - canvas generated background | seti utils */
// FIXME: [eslint] disabled for 3rd-party
/* eslint-disable */

import React from 'react'
import $ from 'jquery'

import styles from './space_background.css'

const generateSpaceBackground = () => {
  // written by https://codepen.io/alexandredees/pen/wseEi
  function generateStar(canvas, ctx, starRadius) {
    ctx.beginPath()
    ctx.arc(starRadius + (Math.random() * canvas.width), starRadius + (Math.random() * canvas.height), starRadius * Math.random(), 0, Math.PI * 2, false)
    // ctx.arc(100, 30, starRadius, 0, Math.PI*2, false);

    const rand = Math.random()
    if(rand <= 0.5) {
      ctx.fillStyle = 'rgba(255, 255, 255, 1)'
      ctx.shadowColor = 'rgba(255, 255, 255, 0.5)'
      ctx.shadowBlur = 3
    } else if(rand > 0.75) {
      ctx.fillStyle = 'rgba(255, 254, 196, 1)'
      ctx.shadowColor = 'rgba(255, 254, 196, 0.5)'
      ctx.shadowBlur = 4
    } else{
      ctx.fillStyle = 'rgba(192, 247, 255, 1)'
      ctx.shadowColor = 'rgba(192, 247, 255, 0.5)'
      ctx.shadowBlur = 7
    }
    ctx.fill()
  }

  $(() => {
    const canvas = document.getElementById('px_seti_bg')
    const context = canvas.getContext('2d')

    const onresize = ()=> {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
    }
    onresize()

    const interval = setInterval(
      (interval) => {
        generateStar(canvas, context, 3)
      }
      , 24) 

    setTimeout( // Stop sreating stars after 10s
      () => { clearInterval(interval) }
      , 10000
    )
  })
}

function CanvasSpaceBackground() {
  generateSpaceBackground()

  return (
    <canvas id="px_seti_bg" className={styles.canvasBG} />
  )
}

export default CanvasSpaceBackground
