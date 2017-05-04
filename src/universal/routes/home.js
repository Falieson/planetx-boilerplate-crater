// @flow
import type { Store } from 'universal/flowtypes/redux'

import Home from 'universal/pages/Home'

// eslint-disable-next-line no-unused-vars
export default (store: Store): Object => ({
  path      : '/',
  indexRoute: {
    component: Home
  }
})
