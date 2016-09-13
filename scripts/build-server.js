#!/usr/bin/env babel-node

import path from 'path'
import asyncScript from '../util/asyncScript'
import isNewerThan from '../util/isNewerThan'
import spawnAsync from '../util/spawnAsync'

process.on('SIGINT', () => process.exit(1))

const root = path.resolve(__dirname, '..')

asyncScript(async () => {
  if (await isNewerThan(path.join(root, 'src'), path.join(root, 'build', 'prerender.js'))) {
    await spawnAsync('webpack', ['--config', path.join(root, 'webpack', 'server.babel.js')], {stdio: 'inherit'})
  } else {
    console.log('build/prerender.js is up to date')
  }
})
