/* Demo of planetx-react-materialui-counter

this component is the counter and counterList layed out on some MUI paper
it can be imported by an application and rendered as content

-- export default becomes import {default as page} from './demo' in `/index.js`

*/

import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import Counts from '../collections/Counts'

export default class CounterDemoPage extends Component {
  state = { value: 0 };
  observer: ?{stop: Function}; // eslint-disable-line react/sort-comp
  sub: ?{stop: Function};

  componentWillMount() {
    if (Meteor.isClient) {
      this.sub = Meteor.subscribe('counts', 'a')
      this.observer = Counts.find({ _id: 'a' }).observeChanges({
        added  : (id: string, fields: Object): any => this.setState(fields), // eslint-disable-line no-unused-vars
        changed: (id: string, fields: Object): any => this.setState(fields) // eslint-disable-line no-unused-vars
      })
    }
  }
  componentWillUnmount() {
    if (Meteor.isClient) {
      if (this.observer != null) { this.observer.stop() }
      if (this.sub != null) { this.sub.stop() }
    }
  }

  render(): React.Element<any> {
    return (
      <h3 className="counter">Counter: {this.state.value}</h3>
    )
  }
}

