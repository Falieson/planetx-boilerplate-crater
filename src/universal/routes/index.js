/* eslint-env node*/
// @flow
import type { Store } from 'universal/flowtypes/redux'

export default (store: Store): Object => ({
  childRoutes: [
    require('./home').default(store)
  ]
})
