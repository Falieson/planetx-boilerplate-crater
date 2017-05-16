// @flow
import type { ReCo } from 'planetx'

import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

import CanvasBackground from '../../backgrounds/space_background'

import Header from '../components/header'
import Content from '../components/content'

import styles from './Shell.css'

type Props = {
  title: string,
  theme: string,
  children: any
}

const PXShell = (props: Props): ReCo => {
  const chosenTheme = props.theme === 'dark' ? darkBaseTheme : null

  return (
    <MuiThemeProvider muiTheme={getMuiTheme(chosenTheme)}>
      <div className={styles.root}>
        <CanvasBackground />

        <Header title={props.title} />
        <Content>
          {props.children}
        </Content>
      </div>
    </MuiThemeProvider>
  )
}

export default PXShell


/*
      <div className={styles.root}>
        <CanvasBackground />
                <Header title={props.title} />
        <Content>
          {props.children}
        </Content>

      </div>
*/
