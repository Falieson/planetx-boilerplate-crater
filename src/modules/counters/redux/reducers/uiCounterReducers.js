/* Reducers: UI | planetx-react-materialui-counters */

// @flow
import type { FSAction } from 'planetx'
import type { State } from '../defaults'

import { defaultState } from '../defaults'
import TYPES from '../actionTypes'

export default function PX_COUNTERS_COUNTER_UI(state: State = defaultState, action: FSAction): State {
  switch (action.type) {
    case TYPES.COUNTER_CREATE: {
      // $FlowFixMe redux-fsa
      const { _id, name } = action.payload

      // set current counter to new counter
      const cCounter = { ...state.counter }
      cCounter._id = _id
      cCounter.name = name
      cCounter.value = 0

      // add counter to records
      const cCounters = { ...state.counters }
      cCounters.records[_id] = cCounter

      return { ...state,
        counter    : cCounter,
        counters   : cCounters,
        lastUpdated: new Date()
      }
    }

    case TYPES.COUNTER_SELECT: {
      // $FlowFixMe redux-fsa
      const { _id } = action.payload

      return { ...state,
        counter: state.counters.records[_id]
      }
    }

    case TYPES.COUNTER_DELETE: {
      // $FlowFixMe redux-fsa
      const { _id } = action.payload

      // update the counter
      const counterKeys = Object.keys(state.counters.records)
      let counter = { ...state.counter }
      if(counter._id === _id) {
        if(counterKeys.length === 1 && counterKeys[0] === _id) {
          counter._id = undefined
        } else if(counterKeys.length > 0) {
          counter = state.counters.records[counterKeys[0]]
        } else {
          counter._id = undefined
        }
      }

      return { ...state,
        counter
      }
    }

    case TYPES.COUNTER_RENAME: {
      // $FlowFixMe redux-fsa
      const { _id, name } = action.payload

      const cCounter = { ...state.counter }
      cCounter.name = name

      // optimistically update counter name in records
      const cCounters = { ...state.counters }
      cCounters.records[_id].name = name

      return { ...state,
        counter    : cCounter,
        counters   : cCounters,
        lastUpdated: new Date()
      }
    }

    case TYPES.COUNTER_INCREMENT: {
      // optimisticly update value in redux counterList
      const counter = { ...state.counter }
      counter.value += 1

      const counters = { ...state.counters }
      counters.records[counter._id] = counter

      return { ...state,
        counter,
        counters,
        lastUpdated: new Date()
      }
    }

    case TYPES.COUNTER_DECREMENT: {
      // optimisticly update value in redux counterList
      const counter = { ...state.counter }
      counter.value -= 1

      const counters = { ...state.counters }
      counters.records[counter._id] = counter

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
