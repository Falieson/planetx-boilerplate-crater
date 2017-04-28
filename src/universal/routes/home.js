// @flow
import type { Store } from 'universal/flowtypes/redux'

import App from 'universal/components/App'

// eslint-disable-next-line no-unused-vars
export default (store: Store): Object => ({
  path      : '/',
  indexRoute: {
    component: App
  }
})
