/**
 *
 * @param publicID
 */
export function publicIDContainsVersion(publicID: string): RegExpMatchArray {
  return publicID.match(/^v[0-9]+/);
}
