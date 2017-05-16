/* MongoDB Methods | planetx-react-materialui-counter-crud

C - Add New Counter returning ID
~~R - Fetch Counter by ID~~ handled by publications
U - Update Counter by ID
D - Delete Counter by ID

*/

// @flow
import type { StandardCallback as StandardCbReturn } from 'planetx'

import { Meteor } from 'meteor/meteor'

import Counters from './collections'


// const StandardCallback = (error: Object, result: string): StandardCbReturn =>
// s  ({ result, error })

Meteor.methods({
  'counters.add': function ({ _id, name, value, sessionId
    }: { _id?: string, name: string, value: number, sessionId: string }): StandardCbReturn {
    return Counters.insert({ _id, name, value, sessionId, createdAt: new Date() })
  },
  'counters.rename': function ({ _id, name }: { _id: string, name: string }): StandardCbReturn {
    return Counters.update({ _id }, { $set: { name, lastUpdated: new Date() } })
  },
  'counters.increment': function ({ _id }: {_id: string}): StandardCbReturn {
    return Counters.update({ _id }, { $inc: { value: 1 }, $set: { lastUpdated: new Date() } })
  },
  'counters.decrement': function ({ _id }: {_id: string}): StandardCbReturn {
    return Counters.update({ _id }, { $inc: { value: -1 }, $set: { lastUpdated: new Date() } })
  },
  'counters.remove': function ({ _id }: { _id: string }): StandardCbReturn {
    return Counters.remove({ _id })
  }
})


/* timer increments every 1 seconds
  const interval = Meteor.setInterval(() => {
    Counts.update({ _id }, { $inc: { value: 1 } })
  }, 1000)
  this.onStop((): any => Meteor.clearInterval(interval))
*/
