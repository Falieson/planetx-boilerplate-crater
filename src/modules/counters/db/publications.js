/* MongoDB Collections | planetx-react-materialui-counters-crud */
// @flow
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

import Counters from './collections'

Meteor.publish({
  'counters.byId': function (_id: string): Mongo.Cursor {
    return Counters.find({ _id })
  },
  'counters.byUser': function (sessionId?: string): Mongo.Cursor {
    const { userId } = this
    if(!userId) {
      return Counters.find({ sessionId })
    }

    return Counters.find({ userId })
  },
  'counters.all': function (limit: number = 10): Mongo.Cursor {
    return Counters.find({}, { sort: { createdAt: -1 }, limit })
  }
})

// Meteor.user() - Get the current user record, or null if no user is logged in. A reactive data source.129
// Meteor.userId() - Get the current user id, or null if no user is logged in. A reactive data source.47
// this.userId - Access inside the publish function. The id of the logged-in user, or null if no user is logged in.
