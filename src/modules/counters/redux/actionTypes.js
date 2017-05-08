/* actionTypes - redux | planetx-react-materialui-counters

  This is a bit ridiculous the way it is made below, at least some loops would condense it but I've
    created this design because in a future commit I will be demonstrating how to refactor this
    idea into something nice with recompose/redux/rxjs
*/

/* eslint-disable import/prefer-default-export */
// @flow

import { reduxUtil } from '../../utils/'

const {
  actionType,
  UI_COMMON,
  FETCH_CYCLE,
  UPDATE_CYCLE,
  DELETE_CYCLE
} = reduxUtil

const BASE: string = 'PX'

const WIDGETS: Array<string> = ['COUNTER', 'COUNTERLIST']
const COUNTER_WIDGET: Array<string> = ['INCREMENT', 'DECREMENT', ...UI_COMMON]

const actionTypes: Object = Object.assign({},
  actionType([WIDGETS[0], COUNTER_WIDGET[0]], BASE),
  actionType([WIDGETS[0], COUNTER_WIDGET[1]], BASE),
  actionType([WIDGETS[0], COUNTER_WIDGET[2]], BASE),
  actionType([WIDGETS[0], COUNTER_WIDGET[3]], BASE),
  actionType([WIDGETS[0], COUNTER_WIDGET[4]], BASE),
  actionType([WIDGETS[0], COUNTER_WIDGET[5]], BASE),

  actionType([WIDGETS[0], FETCH_CYCLE[0]], BASE),
  actionType([WIDGETS[0], FETCH_CYCLE[1]], BASE),
  actionType([WIDGETS[0], FETCH_CYCLE[2]], BASE),
  actionType([WIDGETS[0], UPDATE_CYCLE[0]], BASE),
  actionType([WIDGETS[0], UPDATE_CYCLE[1]], BASE),
  actionType([WIDGETS[0], UPDATE_CYCLE[2]], BASE),
  actionType([WIDGETS[0], DELETE_CYCLE[0]], BASE),
  actionType([WIDGETS[0], DELETE_CYCLE[1]], BASE),
  actionType([WIDGETS[0], DELETE_CYCLE[2]], BASE),

  actionType([WIDGETS[1], FETCH_CYCLE[0]], BASE),
  actionType([WIDGETS[1], FETCH_CYCLE[1]], BASE),
  actionType([WIDGETS[1], FETCH_CYCLE[2]], BASE),
  actionType([WIDGETS[1], UPDATE_CYCLE[0]], BASE),
  actionType([WIDGETS[1], UPDATE_CYCLE[1]], BASE),
  actionType([WIDGETS[1], UPDATE_CYCLE[2]], BASE),
  actionType([WIDGETS[1], DELETE_CYCLE[0]], BASE),
  actionType([WIDGETS[1], DELETE_CYCLE[1]], BASE),
  actionType([WIDGETS[1], DELETE_CYCLE[2]], BASE)
)

// console.log({ actionTypes })

export default actionTypes
