var Movie = require("./mongodb.js");

Movie.create(
{
    "movie": "Pride & Prejudice",
    "starList": ["Keira Knightley", "Matthew Macfadyen"]
},
{
    "movie": "Begin Again",
    "starList": ["Keira Knightley", "Mark Ruffalo"]
},
{
    "movie": "The Imitation Game",
    "starList": ["Keira Knightley", "Benedict Cumberbatch"]
}, function(err, movies)
{
    if (err)
    {
        console.log(err);
        process.exit(1);
    }
    console.log("save movie data to mongodb success");
    process.exit(0);
});
