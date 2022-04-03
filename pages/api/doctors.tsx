import { MongoClient } from 'mongodb'

const options: Object = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

let client
let clientPromise: any

// if (!process.env.MONGODB_URI) {
//   throw new Error('Please add your Mongo URI to .env.local')
// }

client = new MongoClient(
  'mongodb+srv://Jahid:jsashsisds@cluster0.fdjas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  options
)
clientPromise = client.connect()

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.

export default async function handler(req: any, res: any) {
  const client = await clientPromise
  const db = client.db("jem'sTrustDb")
  switch (req.method) {
    case 'POST':
      let bodyObject = JSON.parse(req.body)
      let newPost = await db.collection('doctors').insertOne(bodyObject)
      res.json({ status: 200 })
      break
    case 'GET':
      const doctors = await db.collection('doctors').find({}).toArray()
      res.json(doctors)

      break
  }
}
