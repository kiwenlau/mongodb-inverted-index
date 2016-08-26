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
},
{
    "$project":
    {
        "_id": 0,
        "star": "$_id",
        "movieList": 1
    }
}]).exec(function(err, index)
{
    if (err)
    {
        console.log(err);
    }
    console.log(JSON.stringify(index, null, 4));
});
