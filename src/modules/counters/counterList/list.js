/* CounterList Widget | planetx-react-materialui-counter

  - List of Counters as Chips
      - Label: title || id
      - Tooltip: !!title && id
  - "New Counter" special chip style & action
  - "Delete Counter" action

*/

// @flow
import type { ReEl, FSAction } from 'planetx'
import type { Dispatch } from 'redux'
import type { CounterItem } from '../helpers/flowtypes'

import { autobind } from 'core-decorators'
import { ACTIONS } from '../redux/'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'
import AddCircle from 'material-ui/svg-icons/content/add-circle'
import { lightGreen900, teal900, lightGreen800 } from 'material-ui/styles/colors'
import styles from './list.css'

type Props = {
  counters: {[key: string]: CounterItem},
  handleCreateCounter: Function,
  handleSelectCounter: Function,
  handleDeleteCounter: Function
}

// $FlowHasTrouble autobind
@autobind
class CounterList extends Component {
  props: Props // eslint-disable-line react/sort-comp

  static defaultProps = {
    counters: []
  }

  render(): ReEl {
    const {
      counters, handleCreateCounter, handleSelectCounter, handleDeleteCounter
    } = this.props

    const errorMessage = counters.length === 0
    ? (<span style={{ width: '100%', padding: '2px 0 8px 0' }}>No counters found... </span>) : null

    const style = {
      margin: 4
    }

    const renderAddItem: ReEl = (
      <Chip
        {...{
          style,
          backgroundColor: lightGreen900,
          onTouchTap     : (): void => handleCreateCounter()
        }}
      >
        <Avatar backgroundColor={lightGreen800} icon={<AddCircle />} />
        <div style={{ minWidth: 30 }}>
        New Counter
      </div>
      </Chip>
    )

    // const onTouchTap = (): Fucntion => {} // handleSelectCounter(_id)  // sets the counterId in counterWidget
    // const onRequestDelete = () => {} // handleDeleteCounter(_id) . // runs ~~archive~~ delete counterRecord

    return (
      <div className={styles.container}>
        {errorMessage}

        {renderAddItem}
        {Object.keys(counters).map((k: string): ReEl => (
          <Chip
            {...{
              style,
              backgroundColor: teal900,
              onTouchTap     : (): void => handleSelectCounter(counters[k]._id),
              onRequestDelete: (): void => handleDeleteCounter(counters[k]._id)
            }}
          >
            <div style={{ minWidth: 30 }}>
              {typeof (counters[k].name) === 'string' && counters[k].name.length > 0 ? counters[k].name : `#${counters[k]._id.substring(0, 4)}`}
            </div>
          </Chip>
      ))}
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
    counters: { records }
  } = px_counters || {
    counters: { records: [] }
  }

  return {
    counters: records
  }
}
/* eslint-enable camelcase */

function mapDispatchToProps(dispatch: Dispatch<FSAction>): Object {
  return {
    handleCreateCounter: () => {
      dispatch(
        ACTIONS.newCounter()
      )
    },
    handleSelectCounter: (_id: string) => {
      dispatch(
        ACTIONS.selectCounter(_id)
      )
    },
    handleDeleteCounter: (_id: string) => {
      dispatch(
        ACTIONS.deleteCounter(_id)
      )
    }
  }
}

// $FlowFixMe StatelessComponent
const ConnectedCounter = connect(mapStoreToProps, mapDispatchToProps)(CounterList)
export default ConnectedCounter
