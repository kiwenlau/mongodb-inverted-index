Movie = require("./mongodb.js");

Movie.find(
{
    starList: "Keira Knightley"
},
{
    _id: 0,
    movie: 1
}, function(err, results)
{
    if (err)
    {
        console.log(err);
        process.exit(1);
    }
    console.log("search movie success:\n");
    console.log(JSON.stringify(results, null, 4));
    process.exit(0);
});
