const { MongoClient } = require('mongodb')
const client = new MongoClient("mongodb://localhost:27017")

async function con() {
    try{
        await client.connect();
        console.log("Connected")
        const database = client.db("shopping")
        const data = database.collection("products")
        // const val = await data.insertMany([
        //     { _id: 1, customer: "John", product: "Laptop", amount: 1200, city: "NYC" },
        //     { _id: 2, customer: "Sarah", product: "Phone", amount: 800, city: "LA" },
        //     { _id: 3, customer: "John", product: "Mouse", amount: 25, city: "NYC" },
        //     { _id: 4, customer: "Mike", product: "Laptop", amount: 1200, city: "LA" },
        //     { _id: 5, customer: "Sarah", product: "Keyboard", amount: 50, city: "LA" },
        //     { _id: 6, customer: "John", product: "Monitor", amount: 300, city: "NYC" }
        // ]);

        // const grp = await data.aggregate([ //group data by customer names
        //     {
        //         $group : { _id : "$customer",totOrders : {$sum : 1}
        //         }
        //     }
        // ]).toArray();
        // console.log(grp);

        // const gp1 = await data.aggregate([ //Group data by expenditure
        //     {
        //         $group : { _id : "$customer",
        //             tSpent : { $sum : "$amount"}
        //         }
        //     }
        // ]).toArray();
        // console.log(gp1);

        // const multi = await data.aggregate([
        //     {
        //         $group : { _id : "$customer",
        //         totalOrders : {$sum : 1},
        //         totalSpent : {$sum : "$amount"},
        //         avgAmt : {$avg : "$amount"},
        //         minAmt : {$min : "$amount"},
        //         maxAmt : {$max : "$amount"}
        //         }
        //     },
        // ]).toArray();
        // console.log(multi);

        //Match
        // const mtch = await data.aggregate([ //MatchBeforeGroup
        //     {$match : {city : "NYC"}},
        //     {$group : {_id : "$customer",
        //         tSpent : {$sum : "$amount"}
        //     }
        //     }
        // ]).toArray();
        // console.log(mtch);

        // const mtch = await data.aggregate([ //MatchAfterGroup
        //     {
        //         $group : {_id : "$customer",
        //             tSpent : {$sum : "$amount"}
        //         }
        //     },
        //     {$match : {tspent : {$gt : 1000}}}
        // ]).toArray();
        // console.log(mtch);

    }catch(err){
        console.log(err)
    }finally{
        console.log("closing..")
        client.close();
    }
}
con();