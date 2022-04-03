import { MongoClient } from 'mongodb'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

client = new MongoClient(
  "mongodb+srv://Jahid:jsashsisds@cluster0.fdjas.mongodb.net/jem'sTrustDb?retryWrites=true&w=majority",
  options
)
clientPromise = client.connect()

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
