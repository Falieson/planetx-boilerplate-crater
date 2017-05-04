/* Header | planetx-react-materialui-shell
  NOTE: commented out is the ability to add menu items to a right drawer
*/
// @flow
import type { ReCo } from 'planetx' // ReEl,

import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
// import Drawer from 'material-ui/Drawer'
// import MenuItem from 'material-ui/MenuItem'

import styles from './header.css'

type Props = {
  title: string
}
// type State = {
//   settingsOpen: boolean,
// }

class PXHeader extends Component {
  props: Props
  // state: State // eslint-disable-line react/sort-comp

  // == LIFECYCLE
  // constructor() { // eslint-disable-line react/sort-comp
  //   super()

  //   this.state = {
  //     settingsOpen: true
  //   }
  // }

  // == ACTIONS
  // handleSettingsToggle() {
  //   this.setState({ settingsOpen: !this.state.settingsOpen })
  // }


  // == RENDERS
  renderAppBar(): ReCo {
    // const settingsButtonStyle = {
    //   margin: '10px',
    //   width : '30px',
    //   height: '30px'
    // }
    // const settingsButton = (
    //   <SvgSettings
    //     color="#ffffff"
    //     hoverColor="#000000"
    //     style={settingsButtonStyle}
    //   />
    // )
    return (
      <AppBar
        title={this.props.title}
        showMenuIconButton={false}
        // iconElementRight={settingsButton}
        // onRightIconButtonTouchTap={this.handleSettingsToggle}
      />
    )
  }

  // renderAppDrawer(): ReCo {
  //   return (
  //     <Drawer
  //       docked={false}
  //       openSecondary
  //       width={400}
  //       open={this.state.settingsOpen}
  //       onRequestChange={(settingsOpen: boolean) => { this.setState({ settingsOpen }) }}
  //     >
  //       <RequestForm />
  //     </Drawer>
  //   )
  // }

  render(): ReCo {
    return (
      <div className={styles.container}>
        {this.renderAppBar()}
        {/* this.renderAppDrawer() */}
      </div>
    )
  }
}

export default PXHeader
