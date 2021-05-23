
/**
 *
 * @param a
 */
export function isObject(a: any): a is Record<string, any> {
  return typeof a === 'object' && a !== null;
}
