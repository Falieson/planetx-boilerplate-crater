Start a new PlanetX Project
======

<!-- TOC depthFrom:1 depthTo:3 orderedList:false updateOnSave:true withLinks:true -->

- [MongoDB](#mongodb)
  - [DB Name](#db-name)
  - [Set DB](#set-db)
  - [Access a Collection](#access-a-collection)

<!-- /TOC -->

---

# MongoDB
## DB Name
set mongodb database as "appName" in `/getenv.js`

## Set DB
```
$ mongo
$ show dbs
$ use appName
```

## Access a Collection
```
$ show collections
$ db.counters.find({})
```