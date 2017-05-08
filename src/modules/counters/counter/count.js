// @flow
import type { ReEl } from 'planetx'

import React from 'react'
import styles from './count.css'

type Props = {
  value: number,
}

export default function CounterCount(props: Props): ReEl {
  return (
    <div className={styles.container}>
      <span className={styles.text}>
        {props.value}
      </span>
    </div>
  )
}
