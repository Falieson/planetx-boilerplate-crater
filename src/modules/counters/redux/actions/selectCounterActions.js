/* Actions: Select Counter | planetx-react-materialui-counters */

// @flow
import type { FSAction } from 'planetx'

import { Meteor } from 'meteor/meteor'
import TYPES from '../actionTypes'

// SELECT COUNTER
function counterSelected(_id: string): FSAction {
  return {
    type   : TYPES.COUNTER_SELECT,
    payload: { _id },
    meta   : {},
    error  : false
  }
}
export function selectCounter(_id: string): Function {
  return function thunk(dispatch: Dispatch<*>) {
    dispatch(counterSelected(_id))
  }
}
