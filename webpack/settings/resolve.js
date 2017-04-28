import { root } from '../constants'

const aliases = {
  client   : `${root}/src/client`,
  modules  : `${root}/src/modules`,
  routes   : `${root}/src/universal/routes`,
  server   : `${root}/src/server`,
  universal: `${root}/src/universal`
}

const resolve = {
  extensions: ['.js', '.jsx'],
  alias     : aliases
}

export default resolve
