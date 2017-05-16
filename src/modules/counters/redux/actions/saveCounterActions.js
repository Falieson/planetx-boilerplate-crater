import type { FSAction } from 'planetx'

import { Meteor } from 'meteor/meteor'
// import Counters from '../../db/collections'
// import METEOR METHOD to do insert DUH

import TYPES from '../actionTypes'

// SAVE COUNTER
export function saveCounter(recordId: string, record: any): Upsert {
  // attempt/success/error
  const attemptAction = (_id: string): FSAction => ({
    type   : TYPES.COUNTER_UPDATE_ATTEMPT,
    payload: { _id },
    meta   : {},
    error  : false
  })
  const successAction = (_id: string): FSAction => {
    const { name, sessionId } = record

    return {
      type   : TYPES.COUNTER_UPDATE_SUCCESS,
      payload: { _id, name, sessionId },
      meta   : {},
      error  : false
    }
  }
  const errorAction = (_id: string, error: Object | string): FSAction => ({
    type   : TYPES.COUNTER_UPDATE_ERROR,
    payload: { _id, error },
    meta   : {},
    error  : true
  })

  // error/success

  // console.log('~upsert', {
  //   find: { _id: recordId }, record, callback
  // })
  // console.log('~result')
  return function thunk(dispatch: Dispatch<*>): string {
    dispatch(attemptAction(recordId))

    const newRecord = { ...record }
    newRecord.value = newRecord.value || 0
    newRecord.createdAt = newRecord.createdAt || new Date()

    return Meteor.call('counters.add', newRecord, (err: any, res: any): Function => {
      if(!err) {
        dispatch(successAction(recordId))
        return res
      }

      dispatch(errorAction(recordId, err))
      return err
    })
  }
}
