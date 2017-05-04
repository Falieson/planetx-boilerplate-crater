/* eslint react/prefer-stateless-function: 0 */
/* eslint react/forbid-prop-types: 0 */
/* @flow */
import type { Store, State } from '../universal/flowtypes/redux'

import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import PXShell from '../modules/shell/'

import routes from '../universal/routes/'
import appMeta from '../universal/meta/'

type Props = {
  store: Store,
}

export default class Root extends Component<void, Props, void> {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render(): React.Element<any> {
    const { store } = this.props
    const history = syncHistoryWithStore(browserHistory, store, {
      selectLocationState: (state: State): Object => state.get('router')
    })
    return (
      <Provider store={store}>
        <PXShell {...appMeta}>
          <Router history={history} routes={routes(store)} />
        </PXShell>
      </Provider>
    )
  }
}
