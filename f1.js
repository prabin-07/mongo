const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);
async function con() {
    try{
        await client.connect();
        console.log("Connected");
        const dBase = client.db("Student");
        console.log("Created");
        const std = dBase.collection("students");
        console.log("Creation Success");
        const ress = await std.insertOne({
            name : "Prabin",
            age : 21
        });
        console.log(res.insertedId);
        const res = await std.insertMany([
            {
                name : "Prabin",
                location : "Kottayam",
                number : "76736493838"
            },
            {
                name : "nandakishor",
                age : 10
            }
        ]
    );
    console.log(res.insertedId);
    }catch(err){
        console.log("Failed");
    }finally{
        console.log("Closing...");
        client.close();
    }
}

con();