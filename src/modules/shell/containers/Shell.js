// @flow
import type { ReCo } from 'planetx'

import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

import Header from '../components/header'
import Content from '../components/content'

// import './styles/px-shell-styles.css'

type Props = {
  title: string,
  theme: string,
  children: any
}

const PXShell = (props: Props): ReCo => {
  const chosenTheme = props.theme === 'dark' ? darkBaseTheme : null

  return (
    <MuiThemeProvider muiTheme={getMuiTheme(chosenTheme)}>
      <div>
        <Header title={props.title} />
        <Content>
          {props.children}
        </Content>
      </div>
    </MuiThemeProvider>
  )
}

export default PXShell

