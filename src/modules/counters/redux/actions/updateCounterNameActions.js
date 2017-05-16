/* Actions: Update Counter Name | planetx-react-materialui-counters */

// @flow
import type { Update } from 'planetx-meteor'
import type { FSAction } from 'planetx'
import type { Dispatch } from 'redux'

import { Meteor } from 'meteor/meteor'

import TYPES from '../actionTypes'


// CHANGE COUNTER NAME
export function renameCounter(recordId: string, name: string): Function {
  const counterName = {
    type   : TYPES.COUNTER_RENAME,
    payload: { _id: recordId, name },
    meta   : {},
    error  : false
  }

  const attemptAction = {
    type   : TYPES.COUNTER_UPDATE_ATTEMPT,
    payload: { _id: recordId, name },
    meta   : {},
    error  : false
  }
  const successAction = {
    type   : TYPES.COUNTER_UPDATE_SUCCESS,
    payload: { _id: recordId },
    meta   : {},
    error  : false
  }
  const errorAction = (error: any): FSAction => ({
    type   : TYPES.COUNTER_UPDATE_ERROR,
    payload: { _id: recordId, error },
    meta   : {},
    error  : true
  })


  return function thunk(dispatch: Dispatch<*>): Function {
    dispatch(counterName)
    dispatch(attemptAction)

    return Meteor.call('counters.rename', { _id: recordId, name }, (err: any, res: any): Update => {
      if(!err) {
        dispatch(successAction)
        return res
      }

      dispatch(errorAction(err))
      return err
    })
  }
}
