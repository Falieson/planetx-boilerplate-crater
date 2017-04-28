/* eslint-env node*/
// @flow

import type { Store } from '../flowtypes/redux'

export default (store: Store): Object => ({
  childRoutes: [
    require('./home').default(store)
  ]
})
