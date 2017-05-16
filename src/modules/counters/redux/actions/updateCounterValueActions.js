/* Actions: Update Counter Name | planetx-react-materialui-counters */

// @flow
import type { Update } from 'planetx-meteor'
import type { FSAction } from 'planetx'
import type { Dispatch } from 'redux'

import { Meteor } from 'meteor/meteor'

import TYPES from '../actionTypes'

export function updateCounterValue({ recordId, incr = true }: {recordId: string, incr: boolean}): Function {
  console.log({ recordId, incr })

  const counterIncrement = {
    type   : TYPES.COUNTER_INCREMENT,
    payload: { _id: recordId },
    meta   : {},
    error  : false
  }
  const counterDecrement = {
    type   : TYPES.COUNTER_DECREMENT,
    payload: { _id: recordId },
    meta   : {},
    error  : false
  }

  const attemptAction = {
    type   : TYPES.COUNTER_UPDATE_ATTEMPT,
    payload: { _id: recordId },
    meta   : {},
    error  : false
  }
  const successAction = {
    type   : TYPES.COUNTER_UPDATE_SUCCESS,
    payload: { _id: recordId },
    meta   : {},
    error  : false
  }
  function errorAction(error: any): FSAction {
    return {
      type   : TYPES.COUNTER_UPDATE_ERROR,
      payload: { _id: recordId, error },
      meta   : {},
      error  : true
    }
  }

  return function thunk(dispatch: Dispatch<*>): Function {
    if(!incr) {
      // DECREMENT -- START
      dispatch(counterDecrement)
      dispatch(attemptAction)

      return Meteor.call('counters.decrement', { _id: recordId }, (err: any, res: any): Update => {
        // DECREMENT -- SUCCESS
        if(!err) {
          dispatch(successAction)
          return res
        }

        // DECREMENT -- FAIL
        dispatch(counterIncrement)
        dispatch(errorAction(err))
        return err
      })
    }


    // INCREMENT -- START
    dispatch(counterIncrement)
    dispatch(attemptAction)

    return Meteor.call('counters.increment', { _id: recordId }, (err: any, res: any): Update => {
      // INCREMENT -- SUCCESS
      if(!err) {
        dispatch(successAction)
        return res
      }

      // INCREMENT -- FAIL
      dispatch(counterDecrement)
      dispatch(errorAction(err))
      return err
    })
  }
}
