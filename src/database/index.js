const MongoClient = require('mongodb').MongoClient

/**
 * Connects the mongo client to the database and returns an
 * object that is useful to manage connections and collections.
 *
 * @returns {object}
 */
const getDatabase = async () => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    })
    const db = await client.db()
    return { client, db }
  } catch (error) {
    throw Error(error)
  }
}

/**
 * Performs find on any given collection name,
 * and returns any found documents.
 *
 * @param {*} collectionName
 * @param {*} callback
 */
module.exports.findDocuments = async (collectionName, callback) => {
  try {
    const { db, client } = await getDatabase()
    const collection = db.collection(collectionName)

    collection.find({}).toArray((err, docs) => {
      if (!err) {
        client.close()
        return callback(docs)
      }
      client.close()
      throw Error(err)
    })
  } catch (error) {
    throw Error(error)
  }
}
