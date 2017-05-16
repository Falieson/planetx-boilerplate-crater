/* actionTypes - redux | planetx-react-materialui-counters

  This is a bit ridiculous the way it is made below, at least some loops would condense it but I've
    created this design because in a future commit I will be demonstrating how to refactor this
    idea into something nice with recompose/redux/rxjs
*/

/* eslint-disable import/prefer-default-export */
// @flow

import { reduxUtil } from '../../utils/'

const {
  actionTypeFactory: actionType,
  UI_COMMON,
  CREATE_CYCLE,
  FETCH_CYCLE,
  UPDATE_CYCLE,
  DELETE_CYCLE
} = reduxUtil

const BASE: string = 'PX'

const WIDGETS: Array<string> = ['COUNTER', 'COUNTERLIST']
const COUNTER_WIDGET: Array<string> = ['INCREMENT', 'DECREMENT', ...UI_COMMON]

const types: Object = Object.assign({},
  // COUNTER ACTIONS
  actionType([WIDGETS[0], COUNTER_WIDGET[0]], BASE),
  actionType([WIDGETS[0], COUNTER_WIDGET[1]], BASE),
  actionType([WIDGETS[0], COUNTER_WIDGET[2]], BASE),
  actionType([WIDGETS[0], COUNTER_WIDGET[3]], BASE),
  actionType([WIDGETS[0], COUNTER_WIDGET[4]], BASE),
  actionType([WIDGETS[0], COUNTER_WIDGET[5]], BASE),

  actionType([WIDGETS[0], CREATE_CYCLE[0]], BASE),
  actionType([WIDGETS[0], CREATE_CYCLE[1]], BASE),
  actionType([WIDGETS[0], CREATE_CYCLE[2]], BASE),

  actionType([WIDGETS[0], FETCH_CYCLE[0]], BASE),
  actionType([WIDGETS[0], FETCH_CYCLE[1]], BASE),
  actionType([WIDGETS[0], FETCH_CYCLE[2]], BASE),

  actionType([WIDGETS[0], UPDATE_CYCLE[0]], BASE),
  actionType([WIDGETS[0], UPDATE_CYCLE[1]], BASE),
  actionType([WIDGETS[0], UPDATE_CYCLE[2]], BASE),

  actionType([WIDGETS[0], DELETE_CYCLE[0]], BASE),
  actionType([WIDGETS[0], DELETE_CYCLE[1]], BASE),
  actionType([WIDGETS[0], DELETE_CYCLE[2]], BASE),

  // COUNTERLIST ACTIONS
  actionType([WIDGETS[1], FETCH_CYCLE[0]], BASE),
  actionType([WIDGETS[1], FETCH_CYCLE[1]], BASE),
  actionType([WIDGETS[1], FETCH_CYCLE[2]], BASE),
)

// console.log({ types })

// actionType-proxy
const typeValidator = {
  get(obj: Object, prop: any): any {
    if (obj[prop]) {
      return obj[prop]
    }
    throw new TypeError(`${prop} is not a valid action type`)
  }
}

const actionTypes = new Proxy(types, typeValidator)

export default actionTypes
