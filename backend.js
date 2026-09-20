const { MongoClient } = require("mongodb")
const client = new MongoClient("mongodb://localhost:27017/")

async function connection() {
    try{
        await client.connect();
        console.log("connected to db");
        const database = client.db("fitness");
        console.log("Database created")
        const cln = database.collection("workout");
        console.log("Collection created")
        const datas = await cln.insertMany(
            [
  {
    "id": 1,
    "exercise": "which",
    "duration": 13,
    "caloriesBurned": 633,
    "date": "2026-09-19T23:23:24.193Z"
  },
  {
    "id": 2,
    "exercise": "astride",
    "duration": 114,
    "caloriesBurned": 280,
    "date": "2026-09-20T00:55:19.494Z"
  },
  {
    "id": 3,
    "exercise": "yum",
    "duration": 72,
    "caloriesBurned": 677,
    "date": "2026-09-20T12:57:46.175Z"
  },
  {
    "id": 4,
    "exercise": "round",
    "duration": 67,
    "caloriesBurned": 786,
    "date": "2026-09-20T02:26:00.697Z"
  },
  {
    "id": 5,
    "exercise": "haze",
    "duration": 12,
    "caloriesBurned": 598,
    "date": "2026-09-20T13:01:19.983Z"
  },
  {
    "id": 6,
    "exercise": "forenenst",
    "duration": 32,
    "caloriesBurned": 558,
    "date": "2026-09-20T05:50:33.409Z"
  },
  {
    "id": 7,
    "exercise": "joyfully",
    "duration": 79,
    "caloriesBurned": 689,
    "date": "2026-09-20T08:31:39.419Z"
  },
  {
    "id": 8,
    "exercise": "formamide",
    "duration": 66,
    "caloriesBurned": 769,
    "date": "2026-09-20T16:03:54.236Z"
  },
  {
    "id": 9,
    "exercise": "of",
    "duration": 101,
    "caloriesBurned": 603,
    "date": "2026-09-19T16:56:42.217Z"
  },
  {
    "id": 10,
    "exercise": "onto",
    "duration": 70,
    "caloriesBurned": 236,
    "date": "2026-09-20T07:00:09.689Z"
  },
  {
    "id": 11,
    "exercise": "likely",
    "duration": 58,
    "caloriesBurned": 570,
    "date": "2026-09-20T01:52:45.287Z"
  },
  {
    "id": 12,
    "exercise": "theater",
    "duration": 119,
    "caloriesBurned": 457,
    "date": "2026-09-19T18:04:25.994Z"
  },
  {
    "id": 13,
    "exercise": "preclude",
    "duration": 11,
    "caloriesBurned": 607,
    "date": "2026-09-20T03:21:06.084Z"
  },
  {
    "id": 14,
    "exercise": "defenseless",
    "duration": 114,
    "caloriesBurned": 284,
    "date": "2026-09-20T15:05:01.773Z"
  },
  {
    "id": 15,
    "exercise": "aside",
    "duration": 81,
    "caloriesBurned": 762,
    "date": "2026-09-20T02:40:07.799Z"
  },
  {
    "id": 16,
    "exercise": "gah",
    "duration": 30,
    "caloriesBurned": 244,
    "date": "2026-09-20T15:05:54.360Z"
  },
  {
    "id": 17,
    "exercise": "gee",
    "duration": 95,
    "caloriesBurned": 277,
    "date": "2026-09-19T17:43:08.017Z"
  },
  {
    "id": 18,
    "exercise": "rope",
    "duration": 104,
    "caloriesBurned": 748,
    "date": "2026-09-20T14:12:36.871Z"
  },
  {
    "id": 19,
    "exercise": "cathedral",
    "duration": 90,
    "caloriesBurned": 554,
    "date": "2026-09-19T19:53:29.647Z"
  },
  {
    "id": 20,
    "exercise": "remnant",
    "duration": 82,
    "caloriesBurned": 448,
    "date": "2026-09-19T18:26:20.058Z"
  }
]
        )

}catch(err){
    console.log("error")
}finally{
    client.close();
}
}

connection();