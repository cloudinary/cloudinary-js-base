/**
 * Calls a custom function. </br>
 * Learn more: {@link https://cloudinary.com/documentation/custom_functions | Custom functions}
 * @memberOf Actions
 * @namespace CustomFunction
 * @example
 * import {Cloudinary} from "@cloudinary/base";
 * import {remote, wasm} from "@cloudinary/base/actions/customFunction";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.customFunction(
 *  remote('http://example.com')
 * );
 *
 * image.customFunction(
 *  wasm('myPublicID'); // publicID from Cloudinary
 * );
 */


import CustomFunctionAction from "./customFunction/CustomFunctionAction";
import RemoteAction from "./customFunction/RemoteAction";

/**
 * @summary action
 * @description - Calls a custom function. </br>
 * For more information about remote custom functions see {@link https://cloudinary.com/documentation/custom_functions#remote_functions | the documentation}
 * @param {string} path - Specifies the URL of the remote custom function.
 * @memberOf Actions.CustomFunction
 * @return {Actions.CustomFunctionAction}
 */
function remote(path:string): RemoteAction {
  return new RemoteAction(path)
    .asRemote();
}

/**
 * @summary action
 * @description - Calls a custom function.  </br>
 * For more information about wasm custom functions see {@link https://cloudinary.com/documentation/custom_functions#webassembly_functions | the documentation}
 * @param {string} publicID - Specifies the publicID of the custom function stored in Cloudinary
 * @memberOf Actions.CustomFunction
 * @return {Actions.CustomFunctionAction}
 */
function wasm(publicID:string): CustomFunctionAction {
  return new CustomFunctionAction(publicID)
    .asWasm();
}


const CustomFunction = {remote, wasm};
export {CustomFunction, remote, wasm};
