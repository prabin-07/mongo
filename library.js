const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017/");

async function con() {
    try{
        await client.connect();
        console.log("connected!");
        const dataBase = client.db("library");//created db
        console.log("db created");
        const lib = dataBase.collection("Books"); //collection created
        console.log("collection created");
        // const b1 = await lib.insertOne({
        //     name : "harry porter",
        //     }
        // );
        // console.log(b1.insertedId);//displays obj id in terminal
//         const books = await lib.insertMany([
//     {
//     "author": "Unknown",
//     "country": "Achaemenid Empire",
//     "imageLink": "images/the-book-of-job.jpg",
//     "language": "Hebrew",
//     "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
//     "pages": 176,
//     "title": "The Book Of Job",
//     "year": -600
//     },
//     {
//     "author": "Unknown",
//     "country": "India/Iran/Iraq/Egypt/Tajikistan",
//     "imageLink": "images/one-thousand-and-one-nights.jpg",
//     "language": "Arabic",
//     "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
//     "pages": 288,
//     "title": "One Thousand and One Nights",
//     "year": 1200
//     },
//     {
//     "author": "Unknown",
//     "country": "Iceland",
//     "imageLink": "images/njals-saga.jpg",
//     "language": "Old Norse",
//     "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
//     "pages": 384,
//     "title": "Nj\u00e1l's Saga",
//     "year": 1350
//     },
//     {
//     "author": "Jane Austen",
//     "country": "United Kingdom",
//     "imageLink": "images/pride-and-prejudice.jpg",
//     "language": "English",
//     "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
//     "pages": 226,
//     "title": "Pride and Prejudice",
//     "year": 1813
//     },
//     {
//     "author": "Honor\u00e9 de Balzac",
//     "country": "France",
//     "imageLink": "images/le-pere-goriot.jpg",
//     "language": "French",
//     "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
//     "pages": 443,
//     "title": "Le P\u00e8re Goriot",
//     "year": 1835
//     },
//     {
//     "author": "Samuel Beckett",
//     "country": "Republic of Ireland",
//     "imageLink": "images/molloy-malone-dies-the-unnamable.jpg",
//     "language": "French, English",
//     "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
//     "pages": 256,
//     "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
//     "year": 1952
//     },
//     {
//     "author": "Giovanni Boccaccio",
//     "country": "Italy",
//     "imageLink": "images/the-decameron.jpg",
//     "language": "Italian",
//     "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
//     "pages": 1024,
//     "title": "The Decameron",
//     "year": 1351
//   },
//   {
//     "author": "Jorge Luis Borges",
//     "country": "Argentina",
//     "imageLink": "images/ficciones.jpg",
//     "language": "Spanish",
//     "link": "https://en.wikipedia.org/wiki/Ficciones\n",
//     "pages": 224,
//     "title": "Ficciones",
//     "year": 1965
//   },
//   {
//     "author": "Emily Bront\u00eb",
//     "country": "United Kingdom",
//     "imageLink": "images/wuthering-heights.jpg",
//     "language": "English",
//     "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
//     "pages": 342,
//     "title": "Wuthering Heights",
//     "year": 1847
//   },
//   {
//     "author": "Albert Camus",
//     "country": "Algeria, French Empire",
//     "imageLink": "images/l-etranger.jpg",
//     "language": "French",
//     "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
//     "pages": 185,
//     "title": "The Stranger",
//     "year": 1942
//     }
// const AllBook=await book.find({$or:[{price:450},{authorName:"Paulo Coelho"}]}).toArray() // or oprator
// const AllBook=await book.find({},{projection:{price:1,authorName:1,_id:0,author:1}}).toArray() // include projection
// const AllBook=await book.find({},{projection:{authorName:0,_id:0,author:0}}).toArray() // exclude projection
// const AllBook=await book.find({price:{$lt:350}},{projection:{authorName:0,_id:0,author:0}}).toArray() // exclude projection with condition
// const AllBook=await book.find({price:{$lt:350}},{projection:{authorName:0,_id:0,author:0}}).sort({name:1}).toArray() // sort
// const AllBook=await book.find({price:{$lt:350}},{projection:{authorName:0,_id:0,author:0}}).sort({name:-1}).toArray() // sort
// const AllBook=await book.find({},{projection:{authorName:0,_id:0,author:0}}).limit(10).toArray() // limit
// const AllBook=await book.find({},{projection:{authorName:0,_id:0,author:0}}).skip(15).toArray() // skip
// const AllBook=await book.find({},{projection:{authorName:0,_id:0,author:0}}).sort({name:-1}).skip(5).limit(10).toArray() // projection & sort & limit &skip 
// const AllBook=await book.findOne({authorName:"Paulo Coelho"}) //Returns One documents in that collection
//         ]);
    
    // const  bDetails = await lib.find().toArray(); //retrieve data from db
    // console.log(bDetails); //display data retrieved in terminal

    const bd = await lib.find({pages : {$gt : 185}}).toArray();
    console.log(bd);
        // console.log(books.insertedIds);//displays obj id in terminal
    }catch(err){
        console.log("failed");
    }finally{
        console.log("closing");
        client.close();
    }
}
con();