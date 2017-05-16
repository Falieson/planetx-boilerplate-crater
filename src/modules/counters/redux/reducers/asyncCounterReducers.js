/* Reducers: ASYNC | planetx-react-materialui-counters
- [ ] DRY cache add/remove
- [ ] DRY counter & counters clones
*/

// @flow
import type { FSAction } from 'planetx'
import type { State } from '../defaults'

import { defaultState } from '../defaults'
import TYPES from '../actionTypes'

export default function PX_COUNTERS_COUNTER_ASYNC(state: State = defaultState, action: FSAction): State {
  switch (action.type) {
    // == ATTEMPT
    case TYPES.COUNTER_CREATE_ATTEMPT: {
      // NOTE: uiCounterReducers.counter_create is triggered BEFORE this,
      //   so state.counter creates the counter info
      // $FlowFixMe redux-fsa
      const { _id } = action.payload

      const counter = { ...state.counter,
        loading: true,
        _id
      }

      return { ...state,
        counter,
        lastUpdated: new Date()
      }
    }
    case TYPES.COUNTER_UPDATE_ATTEMPT: {
      // $FlowFixMe redux-fsa
      const { _id } = action.payload

      const counters = { ...state.counters }
      const counter = counters.records[_id]

      // cache add
      counters.cached = counters.cached ? [...counters.cached, counter] : [counter]

      // conclude attempt
      counter.loading = true
      counters.records[_id] = counter

      return { ...state,
        counter,
        counters,
        lastUpdated: new Date()
      }
    }
    case TYPES.COUNTER_DELETE_ATTEMPT: {
      // $FlowFixMe redux-fsa
      const { _id } = action.payload

      const counters = { ...state.counters }
      const counter = counters.records[_id]

      // cache add
      counters.cached = counters.cached ? [...counters.cached, counter] : [counter]

      // conclude update
      counters.loading = true
      delete counters.records[_id]
      return { ...state, counters }
    }


    // == SUCCESS
    case TYPES.COUNTER_DELETE_SUCCESS: {
      // $FlowFixMe redux-fsa
      const { _id } = action.payload

      const counters = { ...state.counters }

      // cache remove
      if(counters.cached) {
        counters.cached.splice(counters.cached.indexOf(_id), 1)
      }

      // conclude update
      counters.loading = false

      return { ...state, counters }
    }
    case TYPES.COUNTER_CREATE_SUCCESS:
    case TYPES.COUNTER_UPDATE_SUCCESS: {
      // $FlowFixMe redux-fsa
      const { _id } = action.payload

      const counters = { ...state.counters }
      const counter = counters.records[_id]

      // cache remove
      if(counters.cached) {
        counters.cached.splice(counters.cached.indexOf(_id), 1)
      }

      // conclude update
      counter.loading = false
      counters.records[_id] = counter

      return { ...state,
        counter,
        counters,
        lastUpdated: new Date()
      }
    }

    // == ERROR
    case TYPES.COUNTER_CREATE_ERROR:
    case TYPES.COUNTER_UPDATE_ERROR:
    case TYPES.COUNTER_DELETE_ERROR: {
      // $FlowFixMe redux-fsa
      const { _id, error } = action.payload

      const counters = { ...state.counters }
      const counterDex = counters.cache.indexOf(_id)
      const counter = counters.cached[counterDex]
      counters.records[_id] = counter

      // cache remove
      if(counters.cached) {
        counters.cached.splice(counters.cached.indexOf(_id), 1)
      }

      // conclude update
      counter.loading = false
      counter.error = error

      return { ...state,
        counter,
        counters,
        lastUpdated: new Date()
      }
    }

    default:
      return state
  }
}
