// @flow
import type { ReEl } from 'planetx'

import React from 'react'
import { Meteor } from 'meteor/meteor'

import { ContentPanel } from 'modules/material-ui-factories/'
import { Page as CounterPage } from 'modules/counters/'

import styles from './Home.css'

export default function App(): ReEl {
  return (
    <div> {/* className={styles.home} */}
      <ContentPanel title="Settings">
        <h3 className={styles.h3}>
          Meteor.settings.public.test:
          <span className="settings-test">{Meteor.settings.public.test}</span>
        </h3>
      </ContentPanel>
      <ContentPanel title="Counter Demo">
        <CounterPage />
      </ContentPanel>
    </div>
  )
}
