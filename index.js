/**
 * Enumeration - Immutable key value pairs.
 *
 * @link https://github.com/TravisMullen/enumeration-class.git
 * @class
 */
export default class Enumeration {
  constructor (obj) {
    for (const key in obj) {
      this[key] = obj[key]
    }
    return Object.freeze(this)
  }
  /**
   * Is a valid key/value of instance.
   *
   * @param {string} key
   * @returns {boolean}
   */
  has (key) {
    return this.hasOwnProperty(key)
  }
}
