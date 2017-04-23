<!-- TOC -->

- [What is Meteor, Meatier, Crater?](#what-is-meteor-meatier-crater)
    - [Whats great about Meteor?](#whats-great-about-meteor)
    - [If meteor is so great, why the forks like Meatier and Crater?](#if-meteor-is-so-great-why-the-forks-like-meatier-and-crater)
    - [Crater Highlights](#crater-highlights)
- [Features](#features)
    - [Planet-X Addon Features (COMING SOON)](#planet-x-addon-features-coming-soon)
        - [addons I will add down the road](#addons-i-will-add-down-the-road)
    - [Crater Features](#crater-features)
- [WHERE to START](#where-to-start)
    - [file structure](#file-structure)
    - [things you can ignore](#things-you-can-ignore)

<!-- /TOC -->

# What is Meteor, Meatier, Crater?
## Whats great about Meteor?
- All in one nodejs development framework great for newbies to angular/react/handlebars and nodejs, cuts out setting up express/gulp/bower/etc.
- And has had Isobuild (web and android/ios) instead of webpack (and the other build tools) to deliver that great newbie experience for many years. 
- Finally, deployment tools and its own package system before they decided to begin decoupling meteor and align and integrate with npm.
    - For example: [1-Step JSON REST API Access](https://atmospherejs.com/simple/rest) to Meteor MongoDB Collections 

## If meteor is so great, why the forks like Meatier and Crater?
- Its exactly what I was looking for as a successor to MeteorJS because it is node first. It uses webpack (the `webpack2` branch still has some issues) so I can setup code splitting and otherwise be aligned with the React community.
- Additionally, I found with meteor it was difficult to modify the head of the dom while in the nodefirst boilerplates I've been experimenting with (like Crater); making routes in a json and then importing it for the  Router component to digest feels natural.
- Finally, Flow Typing and Eslint Watch scripts in the CLI, integration testing, 

Any major changes I made to Crater-Core in my many SETUP commits?
- Not particularly the core but I had to make some tweeks and bug fixes (which I intend to isolate and PR back to `jcoreio/crater`)
- Finally, I've developed .eslint and Flow > PropTypes preferences from my workplace and close to 2 years of coding in my free time with meteor.  


## Crater Highlights
* package.json -> "pre-commit" lint and flow - runs these commands before saving a commit
* lint & flow -> setup as part of the package
* testing -> Integrating Testing comes with the package, Unit testing is very easy to add
* extremeley fast rebuilds in development mode
* production ready w/ SSR

# Features
## Planet-X Addon Features (COMING SOON)
* eslint (much improved)
* Unit testing (for TDD)
* Material UI (for quickly dev'ing x-device interface)
* Flexbox Grid (for quickly dev'ing responsive layouts)

### addons I will add down the road
* Module Import Aliasing (rather than relative path imports)
* CSS grid (instead of Flexbox)
* Browsersync

## Crater Features
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
- with the README.md
- with the doc files listed in the README.md
- how to do something with this stack? Meteor Guide or google/stackoverflow
```
/README.md                        - Dev Notes
/project/
  ClientProjectDescription.md     - What they want me to accomplish
  FeaturePlan.md                  - How I think each piece should work
  StepsAndCommits.md              - What I'm thinking along the way
/docs/CRATER_README.md            - Original `crater/README.md` - Boilerplate features, differences from MeteorJS
```

## file structure
```
/package.json                   - npm packages
/meteor/.meteor/packages        - atmosophere (Meteor) packages
/scripts/                       - Crater stuff
/project/ && /docs/             - Documentation
/src/                           - The Code Base
    server/                     - Server only code: (SSR, WebServer, and register API calls available on the client)
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


## things you can ignore
.trash/ - The trash folder is a place for me to experiment between commits or store references

