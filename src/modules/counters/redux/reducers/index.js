/* Reducer Registry | planetx-react-materialui-counters */

// @flow
import type { FSAction } from 'planetx'
import type { State } from '../defaults'

// import { compact } from 'lodash'
import { defaultState } from '../defaults'

import uiCounterReducers from './uiCounterReducers'
import asyncCounterReducers from './asyncCounterReducers'
import asyncCounterListReducers from './asyncCounterListReducers'


export default function PX_COUNTERS(state: State = defaultState, action: FSAction): State {
  const reducerParts = [
    uiCounterReducers(state, action),
    asyncCounterReducers(state, action),
    asyncCounterListReducers(state, action)
  ]

  let result
  reducerParts.forEach((r: State) => {
    if(r !== state) {
      result = r
    }
  })

  return result || state
}
