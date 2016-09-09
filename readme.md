## Create inverted index on MongoDB

- 博客: [MongoDB优化之倒排索引](http://kiwenlau.com/2016/09/11/mongodb-inverted-index/)

There are two different ways to created inverted index on MongoDB: [MapReduce](https://docs.mongodb.com/manual/core/map-reduce/) and [Aggregation](https://docs.mongodb.com/manual/aggregation/).

#####1. prerequisite

- install node and mongodb
- clone this repository
- install mongoose using npm




#####2. save movie data in mongodb

```
node save.js
```

#####3. search movie by start name without inverted index

```
node save.js
```

#####4. create inverted index using mapreduce

```
node mapreduce.js
```

#####5. create inverted index using mapreduce

```
node aggregation.js
```