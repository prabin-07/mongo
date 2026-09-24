const { MongoClient } = require('mongodb')
const client = new MongoClient("mongodb://localhost:27017")

async function con() {
    try{
        await client.connect();
        console.log("Connected")
        const database = client.db("Product_list")
        const data = database.collection("products")
        // const val = await data.insertMany([
        //     {name : "pen",price : 10, stock : 100},
        //     {name : "Book" , price : 35 , stock : 150},
        //     {name : "watch" , price : 2500 , stock : 200},
        //     {name : "pencil" , price : 20 , stock : 180},
        //     {name : "laptop" , price : 75000, stock : 50},
        // ]);

        // let incl = await data.find({price : 20}, {projection : {name : 1,stock : 1}}).toArray(); //Inclusive projection
        // console.log(incl)

        // let excl = await data.find({price : 20}, {projection : {name : 0,stock : 0}}).toArray(); //Inclusive projection
        // console.log(excl);

        // let age = await data.find().sort({price : 1}).toArray(); //Ascending order sort
        // console.log(age);

        // let dsage = await data.find().sort({price : -1}).toArray(); //Descending order sort
        // console.log(dsage);

        // const skp  = await data.find().skip(2).toArray(); //Skip fields
        // console.log(skp);

        // const lmt = await data.find().limit(2).toArray(); //Limit fields
        // console.log(lmt);

        // const f1 = await data.findOne({ name : "pen"}) //Find only one field that matches
        // console.log(f1)

        // const u1 = await data.updateOne({price : 20}, {$set : { name : "marker"}}) //Update one value
        // console.log(u1);

    }catch(err){
        console.log(err)
    }finally{
        console.log("closing..")
        client.close();
    }
}
con();