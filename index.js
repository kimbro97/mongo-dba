import express from "express"
import  { MongoClient, ServerApiVersion } from "mongodb"

const app = express()

const uri = "mongodb+srv://kimbro:hp12081208@cluster0.n7j4coq.mongodb.net/?retryWrites=true&w=majority";;

const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

await client.connect();
const db = client.db("test")
const collection = db.collection("users")
let docs = []
for(let i = 0; i < 300; i++) {
    docs.push({ a: 1 })
}
collection.insertOne({
    name: "rlagudwo"
})

let user = await collection.find({ name: "rlagudwo" })
console.log(user)

app.get("/", (req, res) => res.send("hello"))

app.listen(3000, () => {
    console.log("3000번에서 실행중");
})


db.bulk.bulkWrite([
    { insertOne: { doc: 1, order: 1 } },
    { insertOne: { doc: 2, order: 2 } },
    { insertOne: { doc: 3, order: 3 } },
    { insertOne: { doc: 4, order: 4 } },
    { insertOne: { doc: 5, order: 5 } },
    { insertOne: { doc: 6, order: 6 } },
    { insertOne: { doc: 7, order: 7 } },
    { insertOne: { doc: 8, order: 8 } },
    {
        deleteOne: {
            filter: { doc: 3 }
        }
    },
    {
        updateOne: {
            filter: { doc: 2 },
            update: {
                $set: { doc: 12 }
            }
        }
    }
])
db.bulk.bulkWrite([
    { insertOne: { doc: 1, order: 1 } },
    { insertOne: { doc: 2, order: 2 } },
    { insertOne: { doc: 3, order: 3 } },
    { insertOne: { doc: 4, order: 4 } },
    { insertOne: { doc: 5, order: 5 } },
    { insertOne: { doc: 6, order: 6 } },
    { insertOne: { doc: 7, order: 7 } },
    { insertOne: { doc: 8, order: 8 } },
    {
        updateOne: {
            filter: { doc: 2 },
            update: {
                $set: { doc: 12 }
            }
        }
    },
    {
        deleteMany: {
            filter: { doc: 3 }
        }
    },
],
    {ordered: false}
)

db.bulk.countDocuments()
db.bulk.estimatedDocumentCount()

db.bulk.distinct()

db.sales.findOne({
    "customer.email": "Keecade@hem.uy"
})

db.inventory.find({
    dim_cm: { $gt: 15, $lt: 20 }
})

db.inventory.find({
    dim_cm: { $elemMatch: { $gt: 15, $lt: 20 } }
})

db.student.insertMany([
    { _id: 2, grades: [ 85, 80, 80 ] },
    { _id: 2, grades: [ 88, 90, 92 ] },
    { _id: 3, grades: [ 85, 100, 90 ] },
])

db.student.updateOne(
    { _id: 1, grades:80 },
    { $set: { "grades.$": 82 } }
)

db.student.updateMany(
    {},
    { $inc: { "grades.$[]": 10 } }
)

db.student.insertMany([
    {
        _id: 6,
        grades: [
            { grade: 90, mean: 75, std: 8 },
            { grade: 87, mean: 90, std: 6 },
            { grade: 85, mean: 85, std: 8 },
        ] },

])

db.student.updateOne(
    { _id: 4, "grades.grade": 85 },
    { $set: { "grades.$std": 6 } }
)

db.student.updateOne(
    { _id: 4, grades: { $elemMatch: { grade: { $gte: 85 } } } },
    { $set: { "grades.$[].grade": 100 } }
)

db.student.updateMany(
    { _id: 6 },
    { $set: { "grades.$[element].grade": 100 } },
    { arrayFilters: [{ "element.grade": { $gte: 87 } }] }
)

db.student.insertMany([
    {
        _id: 7,
        grades: [
            { type: "quiz", questions: [10, 8, 5] },
            { type: "quiz", questions: [8, 9, 6] },
            { type: "hw", questions: [5, 4, 3] },
            { type: "exam", questions: [25, 10, 23, 0] },
        ] },

])

db.student.updateOne(
    { _id: 7 },
    { $inc: { "grades.$[].questions.$[score]": 2 } },
    { arrayFilters: [ {score: { $gte: 8 } } ] }
)

db.shopping.insertMany([
    {
        _id: 1,
        cart: ["banana", "cheeze", "milk"],
        coupons: ["10%", "20%", "30%"]
    },
    {
        _id: 2,
        cart: [],
        coupons: []
    }
])

db.shopping.updateOne(
    { _id: 1 },
    { $addToSet: { cart: { $each: ["beer", "candy"] } } }
)

db.shopping.updateOne(
    { _id: 1 },
    { $pull: { cart: "beer" }  }
)

db.shopping.updateOne(
    { _id: 1 },
    { $pull: { cart: { $in: ["milk"] } }  }
)

db.shopping.updateOne(
    { _id: 1 },
    { $pop: { cart: -1 } }
)

db.shopping.updateOne(
    { _id: 1 },
    { $pop: { cart: 1, coupons: -1 } }
)

db.shopping.updateOne(
    { _id: 1 },
    { $push: { cart: "popcon" } }
)

db.shopping.updateOne(
    { _id: 1 },
    { $push: { coupons: { $each: [ "25%", "35&"] } } }
)

db.shopping.updateMany(
    {},
    {
        $push: {
            coupons: {
                $each: [ "90%", "70%" ],
                $position: 0
            }
        }
    }
)

db.shopping.updateMany(
    {},
    {
        $push: {
            coupons: {
                $each: [ "15%", "20%" ],
                $position: 0,
                $slice: 5
            }
        }
    }
)

db.shopping.updateMany(
    {},
    {
        $push: {
            coupons: {
                $each: [ "90%", "99%" ],
                $position: -1,
                $sort: -1,
                $slice: 5
            }
        }
    }
)