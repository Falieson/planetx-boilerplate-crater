// @flow
import type { FSAction } from 'planetx'
// import type { State } from './defaults'

import { Meteor } from 'meteor/meteor'

const defaultState = {
  sessionId: new Meteor.Collection.ObjectID().toHexString(),
  userId   : Meteor && Meteor.userId && Meteor.userId()
}
type State = {
  sessionId: string,
  userId: string
}

export default function PX_COUNTERS(state: State = defaultState, action: FSAction): State {
  switch (action.type) {
    // == ui actions

    default:
      return state
  }
}
