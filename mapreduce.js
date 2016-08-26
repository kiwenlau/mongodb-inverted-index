var _ = require("underscore");
var Movie = require("./mongodb.js");

var o = {};

o.scope = {
    _: _
};

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
    var movieList = _.flatten(_.pluck(vals, "movieList"));
    return {
        movieList: movieList
    };
};

Movie.mapReduce(o, function(err, results)
{
	if (err) {
		console.log(err);
	}
    console.log(JSON.stringify(results, null, 4));
});
