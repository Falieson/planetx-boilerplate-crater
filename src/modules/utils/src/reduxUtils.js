// @flow

import { joinArrayWithSeperator } from './langUtils'

// ACTION OBJECT
export function actionTypeFactory(arrgs: Array<string>, prefix: string): Object {
  const val = joinArrayWithSeperator('/', arrgs)
  const valBase = joinArrayWithSeperator('/', [prefix, val])

  const key = joinArrayWithSeperator('_', arrgs)

  const obj = {}
  obj[key] = valBase
  return obj
}

// UI CRUD COMMON
export const UI_COMMON: Array<string> = ['CREATE', 'SELECT', 'DELETE', 'RENAME']

// ASYNC ACTIONS
const ASYNC_COMMON: Array<string> = ['ATTEMPT', 'SUCCESS', 'ERROR']

export const CREATE_CYCLE = ASYNC_COMMON.map((c: string): string => joinArrayWithSeperator('_', ['CREATE', c]))
export const FETCH_CYCLE = ASYNC_COMMON.map((c: string): string => joinArrayWithSeperator('_', ['FETCH', c]))
export const UPDATE_CYCLE = ASYNC_COMMON.map((c: string): string => joinArrayWithSeperator('_', ['UPDATE', c]))
export const DELETE_CYCLE = ASYNC_COMMON.map((c: string): string => joinArrayWithSeperator('_', ['DELETE', c]))
export const CRUD_CYCLES: Array<Array<string>> = [FETCH_CYCLE, UPDATE_CYCLE, DELETE_CYCLE]

export const asyncActions: Object = { FETCH_CYCLE, UPDATE_CYCLE, DELETE_CYCLE }
