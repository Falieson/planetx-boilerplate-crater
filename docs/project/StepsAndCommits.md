Steps and Commits
======

<!-- TOC depthFrom:2 depthTo:3 orderedList:false updateOnSave:true withLinks:true -->

- [Commit Thoughts ($sort: desc)](#commit-thoughts-sort-desc)
- [Commit Status ($sort: asc)](#commit-status-sort-asc)
  - [Next](#next)
  - [Done](#done)
  - [Deferred](#deferred)
- [TODO ($sort: asc)](#todo-sort-asc)
  - [FEATURE: COUNTER](#feature-counter)
  - [OPTIMIZATIONS (optional)](#optimizations-optional)
  - [IMPROVEMENTS](#improvements)
- [COMPLETE ($sort: desc)](#complete-sort-desc)
  - [FEATURE: FLOW](#feature-flow)
  - [FEATURE: WEBPACK](#feature-webpack)
  - [FEATURE: BABEL](#feature-babel)
  - [FEATURE: ESLINT](#feature-eslint)
  - [SETUP](#setup)
  - [INIT](#init)
  - [PRE-FLIGHT](#pre-flight)

<!-- /TOC -->

---

# Commits
## Commit Thoughts ($sort: desc)

13. [jcoreio/crater issue#152](https://github.com/jcoreio/crater/issues/152) global css-loader is broken

## Commit Status ($sort: asc)
### Next

1. PX COUNTERS - Counters CRUD MongoDB && BACKGROUNDS - Rainbow Universe
1. PX COUNTERS - Counters with 'redux-observable' (RxJS & Recompose) & 'redux-actions' & redux-action-proxies
1. PX COUNTERS - Update url with counterId and load counter by url
1. PX COUNTERS - Test Coverage
1. PX COUNTERS - Integrate w/ px-react-materialui-auth
1. PX BABEL - install babel-preset-planetx
1. PX TIMER - Extend Counter to do more demos of RxJS

### Done

1. PX INIT - doc, project plan, PlanetX & Crater info
1. PX INIT - package script shortcuts
1. PX INIT - add license
1. PX INIT - fixed project steps log
1. PX ESLINT - INIT
1. PX BABEL - INIT
1. PX ESLINT - install eslint-config-planetx
1. PX ESLINT - update crater for lint rules
1. PX WEBPACK - module aliases and DRY webpack
1. PX FLOW - INIT
1. PX INIT - improve v0.1.0 docs
1. PX COUNTERS - INIT refactor Crater counter into Counters Module
1. PX SHELL - INIT - header & dark theme (material-ui) - BROKEN integration tests
1. PX COUNTERS - Counters Module with 'react-redux'

### Deferred


# Steps
## TODO ($sort: asc)
### FEATURE: COUNTER

- [x] refactor Crater's counter into `/src/modules/ folder
- [x] create counter and counterList module with react, redux, thunk
- [ ] meteor react data with mongodb

### OPTIMIZATIONS (optional)
### IMPROVEMENTS


## COMPLETE ($sort: desc)
### FEATURE: FLOW

- [x] react
- [x] javascript

### FEATURE: WEBPACK

- [x] module aliases
- [x] DRY webpack

### FEATURE: BABEL

- [x] es2017
- [x] es2017 decorators

### FEATURE: ESLINT

- [x] update crater skeleton to conform to `eslint-config-planetx`
- [x] refactored everything out into [eslint-config-planetx](/falieson/eslint-config-planetx)
- [x] install eslint lodash
- [x] install eslint compat & jsx-a11y
- [x] install eslint import
- [x] add my rules
- [x] add airbnb rules

### SETUP
#### Downloading
```
~/C/P/PlanetX ❯❯❯ git clone ~/Code/Public/Opensource/Forks/jcoreio-crater planetx-boilerplate-crater
~/C/P/PlanetX ❯❯❯ cd planetx-boilerplate-crater
```

```
~/C/P/P/planetx-boilerplate-crater (webpack2_for-pr_142-144-145)❯❯❯ git co webpack2
Branch webpack2 set up to track remote branch webpack2 from origin.
Switched to a new branch 'webpack2'
```

```
~/C/P/P/planetx-boilerplate-crater (webpack2)❯❯❯ git merge  webpack2_for-pr_142-144-145
```

#### git remotes
```
~/C/P/P/planetx-boilerplate-crater (webpack2) ❯❯❯ git remote remove origin
~/C/P/P/planetx-boilerplate-crater (webpack2) ❯❯❯ git remote add upstream git@github.com:Falieson/crater.git
~/C/P/P/planetx-boilerplate-crater (webpack2) ❯❯❯ git remote add origin git@github.com:Falieson/planetx-boilerplate-crater.git
```

```
~/C/P/P/planetx-boilerplate-crater (webpack2) ❯❯❯ git remote -v
origin  git@github.com:Falieson/planetx-boilerplate-crater.git (fetch)
origin  git@github.com:Falieson/planetx-boilerplate-crater.git (push)
upstream  git@github.com:Falieson/crater.git (fetch)
upstream  git@github.com:Falieson/crater.git (push)
```

#### git branches
```
~/C/P/P/planetx-boilerplate-crater (webpack2)❯❯❯ git br
* webpack2
  webpack2_for-pr_142-144-145
```

```
~/C/P/P/planetx-boilerplate-crater (webpack2)❯❯❯ git co -b master
Switched to a new branch 'master'
~/C/P/P/planetx-boilerplate-crater (master)❯❯❯ git br -D webpack2
Deleted branch webpack2 (was f051aaa).
~/C/P/P/planetx-boilerplate-crater (master)❯❯❯ git br -D webpack2_for-pr_142-144-145
Deleted branch webpack2_for-pr_142-144-145 (was f051aaa).
```

#### create documentation

```
~/C/P/P/planetx-boilerplate-crater (master)❯❯❯ git co -b dev
~/C/P/P/planetx-boilerplate-crater (dev)❯❯❯ git co -b px_setup
~/C/P/P/planetx-boilerplate-crater (px_setup)❯❯❯ mkdir
~/C/P/P/planetx-boilerplate-crater (px_setup)❯❯❯ mv README.md docs/CRATER_README.md
~/C/P/P/planetx-boilerplate-crater (px_setup)❯❯❯ cp ..../docs/* doc      #doc template from draft repo
```

#### package shortcuts
3 or less letters for anything that needs to be ran often. Not sure about the build and test ones but I figured I might as well fill them out for now and trim it back after I know crater better.

```
    "b": "npm run build",
    "bc": "npm run build:client",
    "bd": "npm run build:docker",
    "bm": "npm run build:meteor",
    "bs": "npm run build:server",
    "f": "npm run flow",
    "fw": "npm run flow:watch",
    "l": "npm run lint:fix",
    "lw": "npm run lint:watch",
    "s": "npm run start",
    "t": "npm run test",
    "td": "npm run test:dev",
    "tdk": "npm run test:docker",
    "thr": "npm run test:hot-reloading",
    "tp": "npm run test:prod"
```

#### package license

- Since Crater is ISC I'm going to use them. Createad `/LICENSE`
- jcoreio/crater didn't have a license file so I created a [PR](https://github.com/jcoreio/crater/pull/147) and file `/docs/licenses/CRATER_LICENSE`


### INIT

- Structure Project & Create Project Description
- Create Plan

### PRE-FLIGHT
#### Running tests
#### Adding some of my MRs to #master to #webpack2
#### Differences between crater#master and crater#webpack2
##### when running `npm run test:dev`
===== MASTER
[phantomjs #0-0]   dev mode
[phantomjs #0-0]       ✓ serves page with correct title
[phantomjs #0-0]       ✓ serves page with correct header
[phantomjs #0-0]       ✓ serves up client css
[phantomjs #0-0]       ✓ updates the counter
[phantomjs #0-0]       ✓ sends Meteor.settings.public to the client
[phantomjs #0-0]       ✓ serves 404 for favicon
[phantomjs #0-0]       ✓ allows switching between home and about page
[phantomjs #0-0]       ✓ proxies or defers to /sockjs
[phantomjs #0-0]
[phantomjs #0-0]   hot reloading
[phantomjs #0-0]       ✓ works on the client
[phantomjs #0-0]       ✓ server restarts when code is changed


===== WEBPACK2
[phantomjs #0-0]   dev mode
[phantomjs #0-0]       ✓ serves page with correct title
[phantomjs #0-0]       ✓ serves page with correct header
[phantomjs #0-0]       ✓ serves up client css
[phantomjs #0-0]       ✓ updates the counter
[phantomjs #0-0]       ✓ sends Meteor.settings.public to the client
[phantomjs #0-0]
[phantomjs #0-0]     hot reloading
[phantomjs #0-0]         ✓ works on the client
[phantomjs #0-0]         ✓ server restarts when code is changed


# Addon Features (optional)

