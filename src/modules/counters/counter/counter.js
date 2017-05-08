/* Counter Widget | planetx-react-materialui-counter */
// @flow
import type { ReEl, FSAction } from 'planetx'
import type { Dispatch } from 'redux'

import { Meteor } from 'meteor/meteor'
import { autobind } from 'core-decorators'
// DATA
// import Counters from '../db/collections'
import { ACTIONS } from '../redux/'
// React & Redux
import React, { Component } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import AddIco from 'material-ui/svg-icons/content/add'
import RemIco from 'material-ui/svg-icons/content/remove'
import { purple500, lightBlue400, grey100, grey900 } from 'material-ui/styles/colors'
import Count from './count'
import styles from './counter.css'

type Props = {
  counterId: string,
  counterName: string,
  counterValue: number,
  handleUpdateCounter: Function
}

// $FlowHasTrouble autobind
@autobind
class CounterContainer extends Component {
  // observer: ?{stop: Function} // eslint-disable-line react/sort-comp
  // sub: ?{stop: Function}
  props: Props // eslint-disable-line react/sort-comp

  // componentWillMount() {
  //   if (Meteor.isClient) {
  //     const { counterId } = this.props

  //     this.sub = Meteor.subscribe('counters.byId', counterId)
  //     this.observer = Counters.find({ _id: counterId }).observeChanges({
  //       added  : (id: string, fields: Object): any => this.setState(fields), // eslint-disable-line no-unused-vars
  //       changed: (id: string, fields: Object): any => this.setState(fields) // eslint-disable-line no-unused-vars
  //     })
  //   }
  // }

  // componentWillUnmount() {
  //   if (Meteor.isClient) {
  //     if (this.observer != null) { this.observer.stop() }
  //     if (this.sub != null) { this.sub.stop() }
  //   }
  // }

  renderHeader(): ReEl {
    const { counterId, counterName } = this.props
    const leftSubheader = (
      <div className={styles.headerWrapper}>
        <h2 className={styles.h2}>
          {counterName}
        </h2>
      </div>
    )
    const rightSubheader = (
      <div className={styles.headerWrapper}>
        <h3 className={styles.h3}>
          #{counterId.substring(0, 4)}
        </h3>
      </div>
    )
    return (
      <div className={styles.content}>
        {leftSubheader}
        {rightSubheader}
      </div>
    )
  }

  renderButton(incrementer: boolean = true): ReEl {
    const style = {
      margin: '12px'
    }

    const icon = incrementer ? (<AddIco color={grey900} />) : (<RemIco color={grey100} />)
    const backgroundColor = incrementer ? lightBlue400 : purple500
    const onTouchTap = (): Function => this.props.handleUpdateCounter({ incr: !!incrementer })

    return (
      <div className={styles.button}>
        <RaisedButton
          {...{
            // label, labelStyle,
            icon, backgroundColor, style, onTouchTap
          }}
        />
      </div>
    )
  }

  renderWidget(): ReEl {
    const { counterValue } = this.props
    return (
      <div className={styles.widget}>
        <Count value={counterValue} />
      </div>
    )
  }

  render(): ReEl {
    const { counterId } = this.props

    console.log({ counterId })

    if(!counterId) {
      return (
        <div className={styles.container}>
        Create a counter...
      </div>
      )
    }

    return (
      <div className={styles.container}>
        {this.renderHeader()}

        <div className={styles.content}>
          {this.renderButton(true)}
          {this.renderWidget()}
          {this.renderButton(false)}
        </div>
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
    counter
  } = px_counters || {
    counter: { _id: undefined, value: 0, name: '' }
  }

  return {
    counterId   : counter._id,
    counterName : counter.name,
    counterValue: counter.value
  }
}
/* eslint-enable camelcase */

function mapDispatchToProps(dispatch: Dispatch<FSAction>): Object {
  return {
    handleUpdateCounter: (incr: boolean) => {
      dispatch(
        ACTIONS.updateCounter(incr)
      )
    }
  }
}

// $FlowFixMe StatelessComponent
const ConnectedCounterContainer = connect(mapStoreToProps, mapDispatchToProps)(CounterContainer)
export default ConnectedCounterContainer
