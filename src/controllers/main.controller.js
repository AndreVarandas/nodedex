const cache = require('memory-cache')
const { availableEndpoints } = require('../constants')
const { findDocuments } = require('../database')

/**
 * Cache time span - 1 day in MS * 7
 */
const ONE_WEEK_MS = 86400000 * 7

/**
 * One route, to rule them all!
 *
 * This route will handle all know endpoints that are defined on the
 * availableEndpoints array.
 *
 * @param {object} req
 * @param {oject} res
 * @returns
 */
module.exports.all = async (req, res) => {
  if (availableEndpoints.includes(req.path)) {
    /**
     * Trim the first character '/' and then we get the collection name
     */
    const collectionName = req.path.substr(1)
    /**
     * Check if the collection was previously cached
     */
    const cached = cache.get(collectionName)
    /**
     * Respond with cached response, if any was found
     */
    if (cached) return res.status(200).json({ success: true, data: cached })
    /**
     * If no cached response was found, fetch data from the database,
     * and cache if for 7 days.
     */
    try {
      return findDocuments(collectionName, data => {
        cache.put(collectionName, data, ONE_WEEK_MS)
        res.status(200).json({ success: true, data })
      })
    } catch (error) {
      res.status(400).json({ success: false, error })
    }
  } else {
    return res.status(404).json({ success: true, message: 'Not Found' })
  }
}
