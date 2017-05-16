/* Actions: Delete Counter | planetx-react-materialui-counters */

// @flow
import type { Insert } from 'planetx-meteor'
import type { FSAction } from 'planetx'

import { Meteor } from 'meteor/meteor'
import TYPES from '../actionTypes'

// DELETE COUNTER
export function deleteCounter(recordId: string): Function {
  const counterCreate = {
    type   : TYPES.COUNTER_DELETE,
    payload: { _id: recordId },
    meta   : {},
    error  : false
  }

  const attemptAction = {
    type   : TYPES.COUNTER_DELETE_ATTEMPT,
    payload: { _id: recordId },
    meta   : {},
    error  : false
  }
  const successAction = {
    type   : TYPES.COUNTER_DELETE_SUCCESS,
    payload: { _id: recordId },
    meta   : {},
    error  : false
  }
  const errorAction = (error: any): FSAction => ({
    type   : TYPES.COUNTER_DELETE_ERROR,
    payload: { _id: recordId, error },
    meta   : {},
    error  : true
  })

  return function thunk(dispatch: Dispatch<*>): Function {
    dispatch(counterCreate)
    dispatch(attemptAction)

    return Meteor.call('counters.remove', { _id: recordId }, (err: any, res: any): Insert => {
      if(!err) {
        dispatch(successAction)
        return res
      }

      dispatch(errorAction(err))
      return err
    })
  }
}
