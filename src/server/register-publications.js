/* MongoDB Publications | Meteor
======
these must be loaded server side, define that once here rather than in every publication file

- FIXME: [webpack] resolve aliases not working
*/
import { Meteor } from 'meteor/meteor'

if (Meteor.isServer) {
  require('../modules/counters/db/publications')
}
