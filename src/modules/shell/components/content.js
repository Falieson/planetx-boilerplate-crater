/* Content | planetx-react-materialui-shell */
// @flow
import type { ReCo } from 'planetx' // ReEl,

import React from 'react'

import styles from './content.css'

type Props = {
  children: any
}

// $FlowHasTrouble children
const PXContent = (props: Props): ReCo => (
  <div className={styles.container}>
    {props.children}
  </div>
)
export default PXContent
