let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://127.0.0.1:27017";

let dbClient;
exports.dbConnect = ()=>{
    mongoClient.connect(url).then(res=>{  //connect returs promise object. i.e. the and catch
        dbClient=res;
        console.log("DB connected");
    }).catch(err=>console.log("error "+err));

}
exports.getCollection = (name)=>{
return dbClient.db("mydb").collection(name);
}
