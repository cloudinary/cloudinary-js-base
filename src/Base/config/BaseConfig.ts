/**
 *
 * @private
 * @param {any} a
 */
function isObject(a: any): boolean {
  if (typeof a !== 'object' || a instanceof Array) {
    return false;
  } else {
    return true;
  }
}

class Config {
  filterOutNonSupportedKeys <T> (userProvidedConfig: T, validKeys:string[]): T {
    const obj:T = Object.create({});

    if (isObject(userProvidedConfig)) {
      (Object.keys(userProvidedConfig) as Array<keyof T>).forEach((key) => {
        if (validKeys.indexOf(key as string) >= 0) {
          obj[key] = userProvidedConfig[key];
        } else {
          console.warn('Warning - unsupported key provided to configuration: ', key);
        }
      });
      return obj;
    } else {
      return Object.create({});
    }
  }
}


export {Config};
