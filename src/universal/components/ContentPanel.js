// @flow
import type { ReCo } from 'planetx'

import React from 'react'
import Paper from 'material-ui/Paper'

import styles from './ContentPanel.css'

type Props = {
  title: string,
  children: any
}

const paperStyle = {
  padding  : '2px',
  marginTop: '5px'
}

// $FlowHasTrouble children
const Content = (props: Props): ReCo => (
  <Paper style={paperStyle} zDepth={1}>
    {props.title && <h1 className={styles.h1}>{props.title}</h1>}
    {props.children}
  </Paper>
)

export default Content
