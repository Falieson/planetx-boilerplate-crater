/* Actions Registry | planetx-react-materialui-counters */

import * as updateCounterList from './updateCounterListActions'
import * as createcounter from './createCounterActions'
import * as deleteCounter from './deleteCounterActions'
import * as saveCounter from './saveCounterActions'
import * as selectCounter from './selectCounterActions'
import * as updateCounterName from './updateCounterNameActions'
import * as updateCounterValue from './updateCounterValueActions'


const api = {
  ...updateCounterList,
  ...createcounter,
  ...deleteCounter,
  ...saveCounter,
  ...selectCounter,
  ...updateCounterName,
  ...updateCounterValue
}

// console.log({ api })

export default api
