import ResizeAdvancedAction from "./ResizeAdvancedAction";

class MinimumPadAction extends ResizeAdvancedAction {
  constructor(width?: number|string, height?: number|string) {
    /* istanbul ignore next */
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    super('mpad', width, height);
  }

}

/**
 * @memberOf Actions.Resize
 * @description
 * Same as the Pad::pad mode but only if the original image is larger than the given limit (width and height),</br>
 * in which case the image is scaled down to fill the given width and height while retaining the original aspect ratio and with all of the original image visible.
 * @param {number|string} width
 * @param {number|string} height
 */
export default function minimumPad(width?: string|number, height?: string|number) :MinimumPadAction {
  return new MinimumPadAction(width, height);
}
