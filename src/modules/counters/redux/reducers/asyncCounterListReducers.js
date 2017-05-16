/* Reducers: ASYNC | planetx-react-materialui-counters */

// @flow
import type { FSAction } from 'planetx'
import type { State } from '../defaults'
import type { CounterItem } from '../../helpers/flowtypes'

import { defaultState } from '../defaults'
import TYPES from '../actionTypes'

export default function PX_COUNTERS_COUNTERLIST_ASYNC(state: State = defaultState, action: FSAction): State {
  switch (action.type) {
    case TYPES.COUNTERLIST_FETCH_ATTEMPT: {
      const counters = { ...state.counters }

      counters.loading = true
      counters.error = false
      return { ...state, counters, lastUpdated: new Date() }
    }

    case TYPES.COUNTERLIST_FETCH_SUCCESS: {
      // $FlowFixMe redux-fsa
      const { records } = action.payload

      const counters = { ...state.counters }
      counters.records = {}
      records.forEach((r: CounterItem) => {
        counters.records[r._id] = r
      })
      counters.loading = false
      counters.error = false

      const counter = { ...state.counter }
      counter.loading = false

      return { ...state,
        counter,
        counters,
        lastUpdated: new Date()
      }
    }

    case TYPES.COUNTERLIST_FETCH_ERROR: {
      const counters = { ...state.counters }
      counters.loading = false
      counters.error = action.error

      const counter = { ...state.counter }
      counter.loading = false

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
