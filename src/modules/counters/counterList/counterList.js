/* CounterListContainer Widget | planetx-react-materialui-counter

  - Wraps CounterList Widget
  - Rename Counter TextField

*/
// @flow
import type { ReEl, FSAction, InputEvent } from 'planetx'
import type { Dispatch } from 'redux'
import type { CounterItems, CounterItem } from '../helpers/flowtypes'

import { Meteor } from 'meteor/meteor'
// DATA
import { createContainer } from 'react-meteor-data'
import Counters from '../db/collections'
import { ACTIONS } from '../redux/'
// React & Redux
import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
// import RaisedButton from 'material-ui/RaisedButton'
import List from './list'
import styles from './counterList.css'

type Props = {
  sessionId: string,
  loading: boolean,
  counters: CounterItems,
  counterName: string,
  counterId: string,
  handleCreateCounter: Function,
  handleRenameCounter: Function,
  handleUpdateCounterList: Function
}

class CounterList extends Component {
  observer: ?{stop: Function} // eslint-disable-line react/sort-comp
  sub: ?{stop: Function}
  props: Props // eslint-disable-line react/sort-comp

  componentWillMount() {
    const {
      counters, loading, handleUpdateCounterList
    } = this.props

    handleUpdateCounterList(counters, loading)

    this.generateDefaultCounter()
  }

  componentWillUpdate(np: Props) {
    const cp = this.props

    const diffCountersAmount = (np.counters) && (np.counters.length !== cp.counters.length)

    if(diffCountersAmount) {
      this.props.handleUpdateCounterList(np.counters, np.loading)
    }
  }

  generateDefaultCounter() {
    const { sessionId, handleCreateCounter } = this.props
    const userExists = Counters.find({ sessionId }).fetch().length > 0

    if(!userExists) {
      handleCreateCounter('First counter', sessionId)
    }
  }

  renderWidget(): ReEl {
    return (
      <div className={styles.widget}>
        <List records={this.props.counters} />
      </div>
    )
  }

  renderTitleInput(): ReEl {
    const {
      handleRenameCounter,
      counterName,
      counterId
    } = this.props

    if(!counterId) {
      return null
    }

    const value = counterName || ''
    const floatingLabelText = `#${counterId.substring(0, 4)}`
    const hintText = floatingLabelText
    const onChange = (e: InputEvent) => {
      e.preventDefault()
      handleRenameCounter(counterId, e.target.value)
    }

    return (
      <div className={styles.titleInput}>
        <div className={styles.input}>
          <TextField {...{ value, onChange, floatingLabelText, hintText }} />
        </div>
      </div>
    )
  }

  render(): React.Element<any> {
    return (
      <div className={styles.container}>
        {this.renderWidget()}
        {this.renderTitleInput()}
      </div>
    )
  }
}

/* eslint-disable camelcase */
function mapStoreToProps(state: Object, ownProps: Props): Object {
  // FIXME: [redux] connect isn't building the object properly
  // should be:
  // const {
  //   px_shell, px_counters
  // } = state

  const px_shell = state._root.entries[1][1]

  const {
    sessionId,
    userId
  } = px_shell

  const px_counters = state._root.entries[2][1]

  const {
    counter: { name, _id },
    lastUpdated
  } = px_counters || {
    counter    : { _id: undefined, value: 0, name: '' },
    lastUpdated: ownProps.lastUpdated || false
  }

  return {
    sessionId,
    userId,
    counterName: name,
    counterId  : _id,
    lastUpdated
  }
}
/* eslint-enable camelcase */

function mapDispatchToProps(dispatch: Dispatch<FSAction>): Object {
  return {
    handleRenameCounter: (_id: string, name: string) => {
      dispatch(
        ACTIONS.renameCounter(_id, name)
      )
    },
    handleCreateCounter: (name: string, sessionId: string) => {
      dispatch(
        ACTIONS.newCounter(name, sessionId)
      )
    },
    handleUpdateCounterList: (records: CounterItem, loading: boolean, error: boolean) => {
      dispatch(
        ACTIONS.updateCounterList(records, loading, error)
      )
    }
  }
}

// Meteor => Redux => CounterList
const ConnectedCounterList = connect(mapStoreToProps, mapDispatchToProps)(CounterList)

const ConnectedCounterListContainer = createContainer((): Object => {
  // Do all your reactive data access in this method.
  // Note that this subscription will get cleaned up when your component is unmounted
  const handle = Meteor.subscribe('counters.all')

  return {
    loading    : !handle.ready(),
    counters   : Counters.find().fetch(),
    lastUpdated: !!handle.ready() && new Date()
  }
}, ConnectedCounterList)

export default ConnectedCounterListContainer

