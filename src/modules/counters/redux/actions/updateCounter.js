// @flow
import type { FSAction } from 'planetx'
import type { Dispatch } from 'redux'

import { Meteor } from 'meteor/meteor'

import TYPES from '../actionTypes'

// CREATE COUNTER
function counterGenerate(_id: string, name?: string): FSAction {
  return {
    type   : TYPES.COUNTER_CREATE,
    payload: { _id, name },
    meta   : {},
    error  : false
  }
}
export function newCounter(name?: string): Function {
  const _id = new Meteor.Collection.ObjectID().toHexString()

  return function thunk(dispatch: Dispatch<*>) {
    dispatch(counterGenerate(_id, name))
  }
}

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
  // TODO: [db] fetch counter value from mongodb

  return function thunk(dispatch: Dispatch<*>) {
    dispatch(counterSelected(_id))
  }
}

// DELETE COUNTER
function counterDelete(_id: string): FSAction {
  return {
    type   : TYPES.COUNTER_DELETE,
    payload: { _id },
    meta   : {},
    error  : false
  }
}
export function deleteCounter(_id: string): Function {
  return function thunk(dispatch: Dispatch<*>) {
    dispatch(counterDelete(_id))
  }
}

// RENAME COUNTER
function counterName(_id: string, name: string): FSAction {
  console.log({ _id, name, type: TYPES.COUNTER_RENAME })

  return {
    type   : TYPES.COUNTER_RENAME,
    payload: { _id, name },
    meta   : {},
    error  : false
  }
}
export function renameCounter(_id: string, name: string): Function {
  // TODO: [db] Update name value in db record

  return function thunk(dispatch: Dispatch<*>) {
    dispatch(counterName(_id, name))
  }
}

// UPDATE COUNTER
function counterIncrement(): FSAction {
  return {
    type   : TYPES.COUNTER_INCREMENT,
    payload: {},
    meta   : {},
    error  : false
  }
}
function counterDecrement(): FSAction {
  return {
    type   : TYPES.COUNTER_DECREMENT,
    payload: {},
    meta   : {},
    error  : false
  }
}
export function updateCounter({ incr = true }: {incr: boolean}): Function {
  return function thunk(dispatch: Dispatch<*>) {
    if(!incr) {
      dispatch(counterDecrement())
    } else {
      dispatch(counterIncrement())
    }
  }
}
