var mongoose = require("mongoose");

var mongodbURI = "mongodb://127.0.0.1:27017/movie";

// connect to mongodb
mongoose.connect(mongodbURI);

mongoose.connection.on('connected', function(err)
{
    console.log("connect to mongodb success");
});

var movieSchema = mongoose.Schema(
{
    movie:
    {
        type: String,
        unique: true
    },
    starList: Array
});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
