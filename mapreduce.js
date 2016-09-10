var Movie = require("./mongodb.js");

var option = {};

option.map = function()
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

option.reduce = function(key, values)
{
    var movieList = [];
    values.forEach(function(value)
    {
        movieList.push(value.movieList[0]);
    });
    return {
        movieList: movieList
    };
};

Movie.mapReduce(option, function(err, results)
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
