/**
 * Created by Raphson on 2/21/16.
 */
var dburl = process.env.dburlz || "mongodb://localhost:27017/blogapp";
var key = "i'm Hungry..chai na!";
module.exports = {
    dburl : dburl,
    sessionSecret : key
}