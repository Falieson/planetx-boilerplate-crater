/* Actions: Refresh CounterList | planetx-react-materialui-counters */

// @flow
import type { CounterItem } from '../../helpers/flowTypes'

import { Meteor } from 'meteor/meteor'

import TYPES from '../actionTypes'

export function updateCounterList(records: CounterItem, loading: boolean = false, error: boolean = false): Function {
  const attemptAction = {
    type   : TYPES.COUNTERLIST_FETCH_ATTEMPT,
    payload: {},
    meta   : {},
    error  : false
  }
  const successAction = {
    type   : TYPES.COUNTERLIST_FETCH_SUCCESS,
    payload: { records },
    meta   : {},
    error  : false
  }
  const errorAction = {
    type   : TYPES.COUNTERLIST_FETCH_ERROR,
    payload: { error },
    meta   : {},
    error  : true
  }
  const subscriptionConnecting = {
    type   : TYPES.COUNTERLIST_FETCH_ERROR,
    payload: { error: error || 'subscription not ready' },
    meta   : {},
    error  : true
  }

  return function thunk(dispatch: Dispatch<*>): Function {
    dispatch(attemptAction)

    if(!loading) {
      if(!error) {
        return dispatch(successAction)
      }
      return dispatch(errorAction)
    }
    return dispatch(subscriptionConnecting)
  }
}
