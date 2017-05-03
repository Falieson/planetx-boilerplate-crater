import path from 'path'
import { buildDir } from '../common'

const meteorConfig = {
  meteorProgramsFolder     : path.resolve(buildDir, 'meteor', 'bundle', 'programs'),
  injectMeteorRuntimeConfig: false,
  exclude                  : []
}

export default meteorConfig
