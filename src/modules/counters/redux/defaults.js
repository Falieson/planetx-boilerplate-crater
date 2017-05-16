/* eslint-disable import/prefer-default-export */
// @flow

import {
  CounterItem, CounterItems
} from '../helpers/flowTypes'

export type State = {
  counter: CounterItem,
  counters: CounterItems
}

export const defaultState: State = {
  counter : { value: 0 },
  counters: {
    records: {},
    meta   : { recordsAmount: 0 }
  },
  lastUpdated: false
}
