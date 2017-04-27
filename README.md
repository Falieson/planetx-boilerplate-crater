<!-- TOC depthFrom:1 depthTo:2 orderedList:false updateOnSave:true withLinks:true -->

- [Documentation](#documentation)
- [Requirements](#requirements)
- [Development](#development)
    - [Startup](#startup)
    - [Dev Server](#dev-server)
    - [Development Process](#development-process)
    - [Dev Debug mode](#dev-debug-mode)
    - [Prod mode](#prod-mode)
    - [Disabling full SSR in prod mode](#disabling-full-ssr-in-prod-mode)
    - [Prod Debug mode](#prod-debug-mode)
- [Testing](#testing)
    - [Eslint/Flow](#eslintflow)
    - [Unit Testing](#unit-testing)
    - [Integration Testing](#integration-testing)
- [Build](#build)
    - [Docker](#docker)
    - [Multiple targets](#multiple-targets)
- [FAQ / Support](#faq--support)

<!-- /TOC -->

# Documentation
```
/docs/
  ./PLANETX_CRATER_WALKTHROUGH.md         - Overview of the Repository (start with this or README.md)
  ./CRATER_README.md                      - Original `crater/README.md` - Boilerplate features, differences from MeteorJS
  ./CRATER_FAQ.md                         - My notes for how to use Crater
  ./CHANGELOG.md                          - Changes by version number
/docs/project/
  ./ProjectDescription.md                 - What it is the package is about
  ./FeaturePlan.md                        - How I think each piece should work
  ./StepsAndCommits.md                    - What I'm thinking along the way
  ./Bugs.md                               - Problems I'm deferring to fix

/README.md (this)                         - Developer Notes
```

# Requirements
- install meteor: https://www.meteor.com/install <br/>
- install node version 6 - (on OSX you can use node version manager to [auto change to node6 using .nvmrc](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)) <br/>
- install mongodb - for OSX: [https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)


# Development
## Startup
~~*Note 1*: I prefer yarn, so I have replaced `npm` and `npm run` in the notes below with `yarn`~~<br/>
Note 1: I preferred yarn but the latest version doesn't support node6lts so everything has been changed back to using npm<br/>
*Note 2*: dev mode only renders a basic page on the server side; only prod mode and the built app render your routes
on the server side.
Make sure to install deps before running the app for the first time:
```
npm i
```

Then after that, startup the Dev Server

## Dev Server
```
npm run s
```
or
```
npm run start
```
Runs the `build:meteor` script, which partially populates this folder, before starting the app.
And open http://localhost:4000 in your browser. (It runs a webpack dev server on port 4000 and proxies to
the main server)

## Development Process
One of my favorite things about the crater boilerplate is it comes with `flow:watch` and `lint:watch` and `npm run start` (or npm run s) will auto-rebuild and HMR. For optimum visibility during development I setup my terminals in a specific way.

### Create Terminal Tabs in iTerm2  
1. Primary: split horizontally (creates: Second)
1. Primary: split vertically (creates: Third)
1. Secondary: split horizontally (creates: Fourth)

Primary: `npm run lint:watch`<br/>
Second: `npm run start`<br/>
Third: `npm run flow:watch`<br/>
Fourth: $ cli (write commits, or whatever)

## Dev Debug mode
```
npm run debug
```
or
```
npm run debug-brk
```
And then go to the usual `node-inspector` URL, which will be printed in the console.

## Prod mode
```
npm run prod
```
And open http://localhost:3000 in your browser.

## Disabling full SSR in prod mode
As neat as it is, full-blown SSR requires more work and you might decide it's not worth it.
To only render an empty HTML document on the server and do everything else on the client, even in production,
set the `DISABLE_FULL_SSR` environment variable:
```
DISABLE_FULL_SSR=1 npm run prod # or npm run build, etc.
```
or look in `webpack/webpack.config.server.js` and uncomment the `DISABLE_FULL_SSR` line inside the
`webpack.DefinePlugin`.  If you build bundles this way, there will be no way to turn full SSR back on at runtime.

## Prod Debug mode
```
npm run prod:debug
```
or
```
npm run prod:debug-brk
```
And then go to the usual `node-inspector` URL, which will be printed in the console.


# Testing
## Eslint/Flow
The following scripts are available:
- `npm run lint`
- `npm run lint:fix`   (or `npm run l`)
- `npm run lint:watch` (or `npm run lw`)
- `npm run flow`       (or `npm run f`)
- `npm run flow:watch` (or `npm run fw`)

## Unit Testing
```
npm run test
```
Doesn't come with crater, so I setup chai-enzyme with mocha. A `HelloWorldTest.js` and  `HelloWorldTest.test.js` example is in the components directory.

## Integration Testing
```
npm run test
```
This runs an integration test that successively runs dev and prod mode via the commands above, and tests that Meteor
integration is working via [PhantomJS](https://www.npmjs.com/package/phantomjs-prebuilt) and
[Webdriver.IO](http://webdriver.io/).

It also tests the docker build, so you need to have `docker` and `docker-compose` installed for the docker test to pass.


# Build
```
npm run build
```
Everything is output to the `build` directory.
Note that `npm run prod` runs this before starting the app.

## Docker
**Note: the Dockerfile is configured to use Node 4.5, but feel free to change it in your own project.**

First build the docker image (this is currently set up to tag it as `jedwards1211/crater:$(git rev-parse HEAD)`):
```
npm run build:docker
```
Then you can run the docker image using: (requires `docker-compose`)
```
npm run docker
```
And open http://localhost:3000 in your browser.

## Multiple targets

If you need to build multiple targets, read the comments in `buildDir.js` and change it accordingly.  Then run any
commands with the `TARGET` environment variable set to the name of the build target.  You can use
`process.env.TARGET` in your code.


# FAQ / Support
- check the [requirements](#requirements)
- go to `docs/CRATER_FAQ.md`
