/* CounterListContainer Widget | planetx-react-materialui-counter

  - Wraps CounterList Widget
  - Rename Counter TextField

*/
// @flow
import type { ReEl, FSAction, InputEvent } from 'planetx'
import type { Dispatch } from 'redux'
import type { CounterItem } from '../helpers/flowtypes'

import { Meteor } from 'meteor/meteor'
// import { autobind } from 'core-decorators'
// DATA
// import Counters from '../db/collections'
import { ACTIONS } from '../redux/'
// React & Redux
import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
// import RaisedButton from 'material-ui/RaisedButton'
import List from './list'
import styles from './counterList.css'

type Props = {
  lastUpdated: Date | boolean,
  counters: Array<CounterItem>,
  counterName: string,
  counterId: string,
  handleCreateCounter: Function,
  handleRenameCounter: Function
}

// $//FlowHasTrouble autobind
// @autobind
class CounterListContainer extends Component {
  // observer: ?{stop: Function} // eslint-disable-line react/sort-comp
  // sub: ?{stop: Function}
  props: Props // eslint-disable-line react/sort-comp

  componentWillMount() {
    const { lastUpdated, handleCreateCounter } = this.props
    if(!lastUpdated) {
      handleCreateCounter('First counter')
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
function mapStoreToProps(state: Object): Object {
  // FIXME: [redux] connect isn't building the object properly
  // should be:
  // const {
  //   px_counters
  // } = state

  const px_counters = state._root.entries[1][1]

  const {
    counters: { records },
    counter: { name, _id },
    lastUpdated
  } = px_counters || {
    counters   : { records: {} },
    counter    : { _id: undefined, value: 0, name: '' },
    lastUpdated: false
  }

  return {
    counters   : records,
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
    handleCreateCounter: (name: string) => {
      dispatch(
        ACTIONS.newCounter(name)
      )
    }
  }
}

const ConnectedCounterListContainer = connect(mapStoreToProps, mapDispatchToProps)(CounterListContainer)
export default ConnectedCounterListContainer

