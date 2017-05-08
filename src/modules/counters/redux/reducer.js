// @flow
import type { FSAction } from 'planetx'
import type { State } from './defaults'

import { defaultState } from './defaults'
import TYPES from './actionTypes'

export default function PX_COUNTERS(state: State = defaultState, action: FSAction): State {
  switch (action.type) {
    // == ui actions
    case TYPES.COUNTER_CREATE: {
      // $FlowFixMe redux-fsa
      const { _id, name } = action.payload

      // set current counter to new counter
      const cCounter = { ...state.counter }
      cCounter._id = _id
      cCounter.name = name
      cCounter.value = 0

      // add counter to records
      const cRecords = { ...state.counters.records }
      cRecords[_id] = cCounter

      // update record to records
      const cCounters = { ...state.counters }
      cCounters.records = cRecords

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

      // optimistically remove counter from records
      const cRecords = { ...state.counters.records }
      delete cRecords[_id]

      // update the counter
      let cCounter = { ...state.counter }
      if(cCounter._id === _id) {
        const cCounterKs = Object.keys(cRecords)
        if(cCounterKs.length > 0) {
          cCounter = cRecords[cCounterKs[0]]
        } else {
          cCounter._id = undefined
        }
      }

      return { ...state,
        counter : cCounter,
        counters: { records: cRecords }
      }
    }

    case TYPES.COUNTER_RENAME: {
      // $FlowFixMe redux-fsa
      const { _id, name } = action.payload

      const cCounter = { ...state.counter }
      cCounter.name = name

      // optimistically update counter name in records
      const cCounters = { ...state.counters }
      const cRecords = { ...cCounters.records }
      cRecords[_id].name = name

      console.log({ name, cRecords, cCounter })

      cCounters.records = cRecords

      return { ...state,
        counter    : cCounter,
        counters   : cCounters,
        lastUpdated: new Date()
      }
    }

    case TYPES.COUNTER_INCREMENT: {
      const cCounter = { ...state.counter }
      cCounter.value += 1

      // optimisticly update value in redux counterList
      const cCounters = { ...state.counters }
      const cRecords = { ...cCounters.records }
      cRecords[cCounter._id] = cCounter
      cCounters.records = cRecords

      return { ...state,
        counter    : cCounter,
        counters   : cCounters,
        lastUpdated: new Date()
      }
    }

    case TYPES.COUNTER_DECREMENT: {
      const cCounter = { ...state.counter }
      cCounter.value -= 1

      // optimisticly update value in redux counterList
      const cCounters = { ...state.counters }
      const cRecords = { ...cCounters.records }
      cRecords[cCounter._id] = cCounter
      cCounters.records = cRecords

      return { ...state,
        counter    : cCounter,
        counters   : cCounters,
        lastUpdated: new Date()
      }
    }


    // == async actions
    // case TYPES.COUNTER_UPDATE_ATTEMPT: {
    //   const cCounter = { ...state.counter }

    //   // $zFlowFixMe redux-fsa
    //   cCounter.id = action.payload.id
    //   cCounter.loading = true
    //   return { ...state, counter: cCounter, lastUpdated: new Date() }
    // }

    // case TYPES.COUNTER_UPDATE_SUCCESS: {
    //   const cCounter = { ...state.counter }

    //   // $zFlowFixMe redux-fsa
    //   cCounter.value = action.payload.value
    //   cCounter.loading = false
    //   return { ...state, counter: cCounter, lastUpdated: new Date() }
    // }

    // case TYPES.COUNTER_UPDATE_ERROR: {
    //   const cCounter = { ...state.counter }
    //   cCounter.loading = false
    //   cCounter.error = action.error
    //   return { ...state, counter: cCounter, lastUpdated: new Date() }
    // }

    default:
      return state
  }
}
