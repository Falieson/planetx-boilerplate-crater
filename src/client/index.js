/* eslint-env node*/
import 'meteor-imports'
import { Meteor } from 'meteor/meteor'
import { Map as iMap } from 'immutable'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import injectTapEventPlugin from 'react-tap-event-plugin' // Material-UI

import makeStore from './makeStore'
import Root from './Root'

if (process.env.NODE_ENV !== 'production') { require('es6-promise').polyfill() }

Meteor.startup(() => {
  injectTapEventPlugin() // Material-UI

  const { router } = window.__INITIAL_STATE__

  // routing is currently a regualr JS object. This may change in the future
  const initialState = iMap({
    router
  })

  const store = makeStore(initialState)
  render(
    <AppContainer key={0}>
      <Root store={store} />
    </AppContainer>,
    document.getElementById('root')
  )

  const reloads = 0

  // Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./Root', () => {
      const Root = require('./Root').default // eslint-disable-line no-shadow
      render(
        <AppContainer key={1 + reloads}>
          <Root store={store} />
        </AppContainer>,
        document.getElementById('root')
      )
    })
  }
})
