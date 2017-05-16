/* Content Panel | planetx-react-materialui-factories */

// @flow
import type { ReCo } from 'planetx'

import React from 'react'
import Paper from 'material-ui/Paper'

import styles from './ContentPanel.css'

type Props = {
  title: string,
  subtitle: string,
  z: number,
  children: any
}

const paperStyle = {
  padding  : '2px',
  marginTop: '5px'
}

const Content = (props: Props): ReCo => (
  <Paper style={paperStyle} zDepth={props.z}>
    {props.title && <h1 className={styles.h1}>{props.title}</h1>}
    {props.subtitle && <h2 className={styles.h2}>{props.subtitle}</h2>}
    {props.children}
  </Paper>
)
Content.defaultProps = {
  z: 1
}

export default Content
