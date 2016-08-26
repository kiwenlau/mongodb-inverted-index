var Movie = require("./mongodb.js");

Movie.create(
{
    movie: "Pride & Prejudice",
    starList: ["Keira Knightley", "Matthew Macfadyen"]
},
{
    movie: "Begin Again",
    starList: ["Keira Knightley", "Mark Ruffalo"]
}, function(err, movies)
{
    if (err)
    {
        console.log(err);
    }
});
