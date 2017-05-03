// @flow
import type { ReEl } from 'planetx'

import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Page as CounterPage } from 'modules/counters/'

import styles from './App.css'

export default function App(): ReEl {
  return (
    <div className={styles.app}>
      <h1>Welcome to PlanetX Crater!</h1>
      <CounterPage />
      <h3>Meteor.settings.public.test: <span className="settings-test">{Meteor.settings.public.test}</span></h3>
    </div>
  )
}
