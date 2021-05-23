
/**
 *
 * @param arg
 */
export function toArray(arg: any) {
  switch (true) {
    case arg == null:
      return [];
    case Array.isArray(arg):
      return arg;
    default:
      return [arg];
  }
}
