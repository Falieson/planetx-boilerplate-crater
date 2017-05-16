import type { React } from 'react'
import type {
  Store as _Store,
  Reducer as _Reducer,
  Dispatch as _Dispatch
} from 'redux'
import { Map as iMap } from 'immutable'

declare module 'planetx' {
  // == JAVASCRIPT
  declare type WindowEvent = SyntheticEvent
  declare type InputEvent = SyntheticInputEvent

  declare type ReCo = React.Component<any>
  declare type ReEl = React.Element<any>

  // == REDUX
  /*
    F = Flux
    S = Standard
    A = Action
  */
  declare type FSAction = {|
    type: string,
    payload?: any,
    error: boolean,
    meta?: any
  |}

  declare type FSAStore = _Store<*, FSAction>

  declare type MapOfReducers = {
    [key: string]: Reducer<*, *>
  }

  declare type State = iMap<string, any>

  declare type Action = {
    type: $Subtype<String>,
    error?: boolean,
    meta?: Object,
  }

  declare type Store = _Store<State, Action>
  declare type Dispatch = _Dispatch<Action>
  declare type Reducer = _Reducer<State, Action>

  // == ASYNC
  declare type StandardCallback = {
    error?: Object | string,
    response?: any
  }
}
