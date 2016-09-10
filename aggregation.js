Movie = require("./mongodb.js");

Movie.aggregate([
{
    "$unwind": "$starList"
},
{
    "$group":
    {
        "_id": "$starList",
        "movieList":
        {
            "$push": "$movie"
        }
    }
}], function(err, results)
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
