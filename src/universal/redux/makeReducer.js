/* makeReducer - util to add reducers to the root reducer
-- (ISSUE) apparently breaks css-loader
-- (ISSUE) module aliases aren't working
*/

// @flow
import type { Reducer } from 'universal/flowtypes/redux'

import { combineReducers } from 'redux-immutablejs'
import { routerReducer } from 'react-router-redux'

// FIXME: [css-loader] breaks when using this import of an export
// import { reducer as counterReducer } from '../../modules/counters/'
import shellReducer from '../../modules/shell/redux/reducer'
import { reducer as counterReducer } from '../../modules/counters/redux'

const currentReducers: {[key: string]: Reducer} = {
  router     : routerReducer,
  px_shell   : shellReducer,
  px_counters: counterReducer
}

// FIXME: [css-loader] breaks when using makeReducer
export default (newReducers?: {[key: string]: Reducer} = {}): Reducer => {
  Object.assign(currentReducers, newReducers)
  return combineReducers(currentReducers)
}
