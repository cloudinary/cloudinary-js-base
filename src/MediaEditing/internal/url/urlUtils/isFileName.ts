/**
 *
 * @param publicID
 */
export function isFileName(publicID: string): boolean {
  return publicID.indexOf('/') < 0;
}
