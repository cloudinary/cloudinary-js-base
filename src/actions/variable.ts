import SetAction from "./variable/SetAction";
import SetAssetReferenceAction from "./variable/SetAssetReferenceAction";
import SetFromContextAction from "./variable/SetFromContextAction";
import SetFromMetadataAction from "./variable/SetFromMetadataAction";
import {ExpressionQualifier} from "../qualifiers/expression/ExpressionQualifier";
import {toFloatAsString} from "../internal/utils/toFloatAsString";

/**
 * Defines a new user variable with the given value.
 * @memberOf Actions
 * @namespace Variable
 * @example
 * import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";
 * import {
 *  set,
 *  setAssetReference,
 *  setFromContext,
 *  setFromMetadata
 * } from "@cloudinary/base/actions/variable";
 * import {scale} from "@cloudinary/base/actions/resize";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 *
 * const image = yourCldInstance.image('woman');
 * image
 *  .addVariable(set('foo1', 100))
 *  .addVariable(setAssetReference('foo2', 'val'))
 *  .addVariable(setFromContext('foo3', 'val'))
 *  .addVariable(setFromMetadata('foo4', 'val'))
 *  .resize(scale().width('$foo1').height('$foo2'))
 */


/**
 * @summary action
 * @description Sets a new user variable with the given value.
 * @memberOf Actions.Variable
 * @param {string} name Variable name
 * @param {number | string | number[] | string[]} value Variable value
 * @return {Actions.Variable.SetAction}
 */
function set(name: string, value: number | string | number[] | string[] | ExpressionQualifier): SetAction {
  if (Object.prototype.hasOwnProperty.call(value, 'push')) {
    return new SetAction(name, value);
  }

  return new SetAction(name, value);
}

/**
 * @summary action
 * @description Same as 'set', but forces the end value to be a float  setFloat(1) will result in $foo_1.0
 * @memberOf Actions.Variable
 * @param {string} name Variable name
 * @param {number} value Variable value
 * @return {Actions.Variable.SetAction}
 */
function setFloat(name: string, value: number): SetAction {
  return new SetAction(name, toFloatAsString(value), '');
}

/**
 * @summary action
 * @description Same as 'set', but forces the end value to be an integer setInteger(1.1) will result in $foo_1, input is rounded down
 * @memberOf Actions.Variable
 * @param {string} name Variable name
 * @param {number} value Variable value
 * @return {Actions.Variable.SetAction}
 */
function setInteger(name: string, value: number): SetAction {
  let val = value;
  if (typeof value === 'string') {
    val = parseInt(value);
  }

  if (isNaN(val)) {
    val = 0;
  }

  return new SetAction(name, Math.round(val));
}


/**
 * @summary action
 * @description Same as 'set', but forces the end value to be a string setString(1) will result in $foo_!1!
 * @memberOf Actions.Variable
 * @param {string, number} name Variable name
 * @param {number} value Variable value
 * @return {Actions.Variable.SetAction}
 */
function setString(name: string, value: string | number): SetAction {
  const val = typeof value === 'string' ? value : value.toString();

  return new SetAction(name, val);
}




/**
 * @summary action
 * @description Allows adding a variable by sending a key and value which is a reference to an asset.
 * @memberOf Actions.Variable
 * @param {string} name
 * @param {string} value
 * @return {Actions.Variable.SetAssetReferenceAction}
 */
function setAssetReference(name: string, value: string): SetAssetReferenceAction {
  return new SetAssetReferenceAction(name, value);
}

/**
 * @summary action
 * @description Allows adding a variable by sending a key and value which is a key to a value that assumed to be on
 * the asset’s context.
 * @memberOf Actions.Variable
 * @param {string} name
 * @param {string} value
 * @return {Actions.Variable.SetFromContextAction}
 */
function setFromContext(name: string, value: string): SetFromContextAction {
  return new SetFromContextAction(name, value);
}

/**
 * @summary action
 * @description Allows adding a variable by sending a name and value which is a key to a value that assumed to be on
 * the predefined account’s metadata fields.
 * @memberOf Actions.Variable
 * @param {string} name
 * @param {string} value
 * @return {Actions.Variable.SetFromMetadataAction}
 */
function setFromMetadata(name: string, value: string): SetFromMetadataAction {
  return new SetFromMetadataAction(name, value);
}

const Variable = {
  set,
  setFloat,
  setString,
  setInteger,
  setAssetReference,
  setFromContext,
  setFromMetadata
};
export {
  set,
  setFloat,
  setString,
  setInteger,
  setAssetReference,
  setFromContext,
  setFromMetadata,
  Variable
};
