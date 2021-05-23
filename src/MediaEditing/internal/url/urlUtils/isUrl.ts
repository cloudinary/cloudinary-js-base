/**
 *
 * @param publicID
 */
export function isUrl(publicID: string): RegExpMatchArray {
  return publicID.match(/^https?:\//);
}
