PlanetX Crater Walkthrough
======

This project rests atop the shoulders of giants to deliver an even stronger project starting experience.
------

Keywords: ES7+, React, Flow, ESlint, Webpack2, MaterialUI, DarkTheme, Modular, Counters CRUD Demo


<!-- TOC -->

- [What is Meteor, Meatier, and Crater?](#what-is-meteor-meatier-and-crater)
  - [Whats great about Meteor?](#whats-great-about-meteor)
  - [If meteor is so great, why the forks like Meatier and Crater?](#if-meteor-is-so-great-why-the-forks-like-meatier-and-crater)
  - [Will Crater adopt ideas from this project?](#will-crater-adopt-ideas-from-this-project)
- [Features](#features)
  - [Crater Highlights](#crater-highlights)
  - [PlanetX Crater Features](#planetx-crater-features)
  - [All Crater Features (from CRATER_README)](#all-crater-features-from-crater_readme)
- [WHERE to START](#where-to-start)
  - [file structure](#file-structure)

<!-- /TOC -->

---

# What is Meteor, Meatier, and Crater?
## Whats great about Meteor?
- All-in-one nodejs framework: great for newbies to `angular/react/handlebars` and `nodejs` because it cuts out setting up express/gulp/bower/etc.

- Instead it has Isobuild (web and android/ios) instead of webpack (and the other build tools) so anyone can get an app to production.

- while integrating with NPM fine, Meteor's package system (Atmosophere) provides many client/server side utilities for fast prototyping, such as: [1-Step JSON REST API Access](https://atmospherejs.com/simple/rest) to Meteor MongoDB Collections

## If meteor is so great, why the forks like Meatier and Crater?
- The react community prefers Webpack, and I had encountered issues with React development w/ MeteorJS' ISOBuild

- Slow development rebuild times

- My long term frustrations with Meteor, such as:
  - building SEO friendly Meteor sites
  - setting up Flow Typing
  - setting up Testing

## Will Crater adopt ideas from this project?
I propose some improvements that are appropriate via my fork [falieson/crater](https://github.com/falieson/crater) and have contributed to [jcoreio/crater](https://github.com/jcoreio/crater).


# Features
## Crater Highlights
* package.json -> "pre-commit" lint and flow - runs these commands before saving a commit
* lint & flow -> setup as part of the package
* testing -> Integrating Testing comes with the package, Unit testing is very easy to add
* extremeley fast rebuilds in development mode
* production ready w/ SSR

## PlanetX Crater Features
* improved eslint
* improved babel
* improved flow
* module aliases (rather than relative path imports)
* Material UI (for quickly dev'ing x-device interface)
* Flexbox Grid (for quickly dev'ing responsive layouts)
* -Unit testing (coming soon...)-
* -Browsersync-

## All Crater Features (from CRATER_README)
* You can run any server and client code except Meteor packages outside of Meteor's control (without running it through Isobuild)
* Starts faster than `meteor` dev mode
* Babel 6 with es2015, stage-1 presets by default
* Server uses `babel-register`
* Client code is bundled by Webpack
* Server creates an Express app and generates HTML pages with React SSR
* Automatic server restart via `smart-restart`
* react-hot-loader 3 (beta)
* redux
* react-router
* react-router-redux
* eslint, eslint-watch
* flow, flow-watch
* Very customizable
* Dockerfile included
* Webdriver.io + Mocha + Chai integration test setup
* Thoroughly integration-tested

# WHERE to START
- with `/README.md`
- with Crater's readme at `/docs/CRATER_README.md`
- with the doc files listed in the README.md
- how to do something with this stack? Meteor Guide or google/stackoverflow
```
/README.md                                - Developer Notes

/docs/
  ./PLANETX_CRATER_WALKTHROUGH.md         - Overview of PlanetX vs original Crater
  ./CRATER_README.md                      - Original `crater/README.md`
  ./CRATER_FAQ.md                         - My notes for how to use Crater
  ./CHANGELOG.md                          - Changes by version number
  
/docs/project/
  ./ProjectDescription.md                 - What it is the package is about
  ./FeaturePlan.md                        - How I think each piece should work
  ./StepsAndCommits.md                    - What I'm thinking along the way
  ./Maintanence.md                        - Notes about maintaining the project
```

## file structure
```
/package.json                   - npm packages
/meteor/.meteor/packages        - atmosophere (Meteor) packages
/scripts/                       - Crater stuff
/project/ && /docs/             - Documentation
/src/                           - The Code Base
    server/                     - Server only code: (SSR, WebServer, and registers)
    client/                     - Client only code, hooks for client only modules
    styles/                     - Crater's preference for style locations
    modules/                    - Module/Package style react development
        helloFresh-recipes      - HelloFresh Code
        material-ui-auth        - Material-UI Form for Meteor User Accounts (by me)
    universal/                  - Client/Server shared code
        collections/            - Meteor MongoDB app (vs module) level collections
        components/             - App level components (vs module)
        flowtypes/              - DRY Flow Typing definitions
        redux/                  - App level redux
        routes/                 - Routing definitions
```
