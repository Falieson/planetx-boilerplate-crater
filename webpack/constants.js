import path from 'path'
import buildDir from '../buildDir'

const root = path.resolve(__dirname, '..')
const srcDir = path.join(root, 'src')
const globalCSS = path.join(srcDir, 'styles', 'global')
const clientInclude = [srcDir]

export {
  root,
  buildDir,
  srcDir,
  globalCSS,
  clientInclude
}
