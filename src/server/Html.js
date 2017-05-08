/* @flow */
/* eslint react/prefer-stateless-function: 0 */
/* eslint react/no-danger:0 */
/* eslint react/no-unused-prop-types:0 */
/* eslint react/forbid-prop-types: 0 */
/* eslint react/require-default-props: 0 */

import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { RouterContext } from 'react-router'

// $FlowFixMe ignored-directory
import { renderToString } from 'react-dom-stream/server'

import styles from '../modules/shell/styles/global.css.js'

// Injects the server rendered state and app into a basic html template
export default class Html extends Component {
  static propTypes = {
    __meteor_runtime_config__: PropTypes.object.isRequired,
    store                    : PropTypes.object.isRequired,
    assets                   : PropTypes.object,
    env                      : PropTypes.object,
    settings                 : PropTypes.object,
    renderProps              : PropTypes.object,
    title                    : PropTypes.string.isRequired,
    theme                    : PropTypes.string.isRequired
  }

  render(): React.Element<any> {
    const PROD = process.env.NODE_ENV === 'production'
    const { title, theme, __meteor_runtime_config__, store, assets, renderProps } = this.props
    const { manifest, app, vendor, meteor } = assets || {}
    const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}`
    const root = PROD && !process.env.DISABLE_FULL_SSR && renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    )

    // const chosenTheme = theme === 'dark' ? 'px-shell-body--dark' : false // FIXME: [issue#152](https://github.com/jcoreio/crater/issues/152) styles as class

    return (
      <html lang="en">
        <head>
          <title>{title}</title>

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

          {PROD && <link rel="stylesheet" href="/static/prerender.css" type="text/css" />}
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,500" rel="stylesheet" type="text/css" />
        </head>
        <body style={theme === 'dark' ? styles.body.dark : styles.body.light}>
          {/* className={chosenTheme ? styles[chosenTheme] : undefined}> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__meteor_runtime_config__ = ${JSON.stringify(__meteor_runtime_config__)}`
            }}
          />
          <script dangerouslySetInnerHTML={{ __html: initialState }} />
          {PROD ? <div id="root" dangerouslySetInnerHTML={{ __html: root }} /> : <div id="root" />}
          {PROD && <script dangerouslySetInnerHTML={{ __html: manifest.text }} />}
          {PROD && <script src={vendor.js} />}
          {PROD && <script src={meteor.js} />}
          <script src={PROD ? app.js : '/static/app.js'} />
          {process.env.DISABLE_FULL_SSR && <span id="full-ssr-disabled" />}
        </body>
      </html>
    )
  }
}
