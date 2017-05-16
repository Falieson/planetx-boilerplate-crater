/* Actions: Create Counter | planetx-react-materialui-counters */

// @flow
import type { Insert } from 'planetx-meteor'
import type { FSAction } from 'planetx'

import { Meteor } from 'meteor/meteor'

import TYPES from '../actionTypes'

// CREAT COUNTER
function createCounter(recordId: string, record: any): Function {
  const counterCreate = {
    type   : TYPES.COUNTER_CREATE,
    payload: { _id: recordId, name: record.name, sessionId: record.sessionId },
    meta   : {},
    error  : false
  }

  const attemptAction = {
    type   : TYPES.COUNTER_CREATE_ATTEMPT,
    payload: { _id: recordId },
    meta   : {},
    error  : false
  }
  const successAction = {
    type   : TYPES.COUNTER_CREATE_SUCCESS,
    payload: { _id: recordId },
    meta   : {},
    error  : false
  }
  const errorAction = (error: any): FSAction => ({
    type   : TYPES.COUNTER_CREATE_ERROR,
    payload: { _id: recordId, error },
    meta   : {},
    error  : true
  })

  return function thunk(dispatch: Dispatch<*>): Function {
    dispatch(counterCreate)
    dispatch(attemptAction)

    const newRecord = { ...record }
    newRecord.value = newRecord.value || 0

    return Meteor.call('counters.add', newRecord, (err: any, res: any): Insert => {
      if(!err) {
        dispatch(successAction)
        return err
      }

      dispatch(errorAction(err))
      return res
    })
  }
}

export function newCounter(counterName?: string, userSessionId: string): Function {
  const recordId = new Meteor.Collection.ObjectID().toHexString()
  const record = { _id: recordId, name: counterName, sessionId: userSessionId }

  return createCounter(recordId, record)
}
