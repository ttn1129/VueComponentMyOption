export default class DomValueFinder {
  /**
   * @returns null | string
   * @param {string} nodeType
   */
  resolveNodeType(nodeType) {
    if (typeof nodeType !== "string") {
      return null;
    }
  }

  getValue(type, docutment, id) {}
}
