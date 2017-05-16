PlanetX Counters: Counter and List of Counters
======

Screenshot
------
![alt text](https://raw.githubusercontent.com/PlanetXjs/planetxjs.github.io/master/assets/px-react-materialui-counters/PX_COUNTER_REDUX.gif)

Features
------

- [x] refactor Crater's counter into `/src/modules/ folder
- [x] create counter and counterList module with react, redux, thunk
- [x] meteor react data with mongodb
- [x] meteor redux optimistic updates and cache
- [ ] test coverage
- [ ] adv. redux: RxJS & redux & proxies
- [ ] make counter rename part of counterWidget (click h3.counterName to rename)
- [ ] upgrade to timers (more RxJS)
- [ ] paginate counters (all counters vs this.userId())


TODO STREAM
------
- reducers: DRY up caching of attempt/success/error
- add session package for meteor and to px-shell
- redux for fetch counters for attempt/response sessionId from db
- redux for shell loading (Meteor.isReady(), Document.isLoaded(), Meteor.subscriptions.allConnected(), Meteor.subcriptions.allReady() )
- show total records in collection (for when greater than 10)
