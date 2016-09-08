var _ = require("underscore");
var Movie = require("./mongodb.js");

var o = {};

o.map = function()
{
    var movie = this.movie;
    this.starList.forEach(function(star)
    {
        emit(star,
        {
            movieList: [movie]
        });
    });
};

o.reduce = function(k, vals)
{
    var movieList = [];
    vals.forEach(function(val)
    {
        movieList.push(val.movieList[0]);
    });
    return {
        movieList: movieList
    };
};

Movie.mapReduce(o).exec(function(err, results)
{
    if (err)
    {
        console.log(err);
        process.exit(1);
    }
    console.log("create inverted index success:\n");
    console.log(JSON.stringify(results, null, 4));
    process.exit(0);
});
