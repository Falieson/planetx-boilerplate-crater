Features
======

Core Settings and Modules
------

<!-- TOC depthFrom:1 depthTo:3 orderedList:false updateOnSave:true withLinks:true -->

- [Settings](#settings)
  - [Config](#config)
  - [Webpack](#webpack)
  - [ESlint](#eslint)
  - [Babel](#babel)
  - [Flowtype](#flowtype)
  - [Enzyme (Unit Testing)](#enzyme-unit-testing)
  - [Continuous Integration](#continuous-integration)
- [Modules](#modules)
  - [Counters](#counters)
  - [Auth/Accounts](#authaccounts)
  - [backgrounds](#backgrounds)
  - [utils](#utils)

<!-- /TOC -->

---

# Settings

## Config
- [x] .nvmrc 
- [x] .gitignore
- [ ] settings.test.json :: meteor server settings
- [ ] settings.production.json :: meteor server settings

## Webpack
- [x] module aliases
- [x] DRY webpack

## ESlint
- [x] es2017 preferences
- [x] modularized into package `eslint-config-planetx`

## Babel
- [x] es2017 support
- [ ] modularized into package `babel-preset-planetx`

## Flowtype
- [x] react
- [x] javascript

## Enzyme (Unit Testing)
- [ ] setup
- [ ] app unit tests
- [ ] counter unit tests

## Continuous Integration

- [ ] .travis.yml
- [ ] greenkeeper
- [ ] coveralls

# Modules

Core Modules included with every install of planetx-boilerplate-crater

## Counters
- [x] counters: counter CRUD and conterList
- [x] counters: redux
- [ ] counters: collections
- [ ] modularized into package `planetx-meteor-react-counters`
- [ ] counters: rxjs & recompose
- [ ] counters: all vs sessionId vs userId
- [ ] multiUser: lock selected counter so others can't select/edit it
- [ ] multiUser: list of active sessionIds & what counter the user is editing
- [ ] counters: handle error state

## Auth/Accounts
- [ ] auth: redux-form (industrialize it)
- [ ] auth: redux (integrate with px-shell & px-crater)
- [ ] modularize into package `planetx-react-materialui-auth`
- [ ] auth: meteor's Oauth
- [ ] auth: Passport

## backgrounds
- [x] randomly generated space background

## utils
- [x] lang: array.spliced()
- [x] lang: joinArrayWithSeperator
- [x] redux: asyncActionTypes
- [x] redux: actionTypeFactory
