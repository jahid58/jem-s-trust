import * as clientPromise from '../../lib/mongodb'

export default async function handler(req: any, res: any) {
  const client: any = await clientPromise
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
