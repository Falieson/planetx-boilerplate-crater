/* Demo of planetx-react-materialui-counter

this component is the counter and counterList layed out on some MUI paper
it can be imported by an application and rendered as content

-- export default becomes import {default as page} from './demo' in `/index.js`

*/

import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import { ContentPanel } from 'modules/material-ui-factories/'
import Counter from '../counter/'
import List from '../counterList/'
import styles from './counters.css'

export default class CounterDemoPage extends Component {
  constructor() {
    super()

    this.state = {
      counterId     : undefined,
      countersAmount: 0
    }
  }

  // handle counterSelectedInList

  render(): React.Element<any> {
    return (
      <div className={styles.container}>
        <Grid fluid>
          <Row>
            <Col xs>
              <ContentPanel z={2}> {/* subtitle="Counter" */}
                <Counter counterId={this.state.counterId} />
              </ContentPanel>
            </Col>

            <Col xs>
              <ContentPanel subtitle="Counters" z={2}>
                <List />
              </ContentPanel>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

