import RoundCornersAction from "../actions/roundCorners/RoundCornersAction";
import CustomFunctionAction from "../actions/customFunction/CustomFunctionAction";
import {LayerAction} from "../actions/layer/LayerAction";
import {Action} from "../internal/Action";
import VariableAction from "../actions/variable/VariableAction";
import {ConditionalAction} from "../actions/conditional";
import ResizeSimpleAction from "../actions/resize/ResizeSimpleAction";
import RotateAction from "../actions/rotate/RotateAction";
import {BackgroundColor} from "../actions/background/actions/BackgroundColor";
import {NamedTransformationAction} from "../actions/namedTransformation/NamedTransformationAction";
import {SmartObjectAction} from "../actions/psdTools/SmartObjectAction";
import {ClipAction} from "../actions/psdTools/ClipAction";
import {GetLayerAction} from "../actions/psdTools/GetLayerAction";
import {IReshape} from "../actions/reshape";
import {SystemColors} from "../qualifiers/color";
import {prepareColor} from "../internal/utils/prepareColor";
import {ExtractAction} from "../actions/extract";
import {Border, BorderAction} from "../actions/border";
import {FlagQualifier} from "../qualifiers/flag/FlagQualifier";
import {EffectActions} from "../actions/effect";
import {videoEditType} from "../actions/videoEdit";
import {DeliveryAction} from "../actions/delivery/DeliveryAction";
import {RawAction} from "../internal/RawAction";
import {IAdjustAction} from "../actions/adjust";
import {IDeliveryAction} from "../actions/delivery";
import {ITranscodeAction} from "../actions/transcode";

/**
 * @summary SDK
 * @description - Defines how to transform an asset
 * @memberOf SDK
 */
class Transformation {
  actions: (Action | RawAction)[];

  constructor() {
    this.actions = [];
  }

  /**
   * @param {SDK.Action | string} action
   * @return {this}
   */
  addAction(action: Action | string): this {
    let actionToAdd: Action | RawAction;
    if (typeof action === 'string') {
      if (action.indexOf('/') >= 0) {
        throw 'addAction cannot accept a string with a forward slash in it - /, use .addTransformation() instead';
      } else {
        actionToAdd = new RawAction(action);
      }
    } else {
      actionToAdd = action;
    }
    this.actions.push(actionToAdd);
    return this;
  }

  /**
   * @description Allows the injection of a raw transformation as a string into the transformation, or a Transformation instance that was previously created
   * @param {string | SDK.Transformation} tx
   * @example
   * import {Transformation} from "@cloudinary/base";
   *
   * const transformation = new Transformation();
   * transformation.addTransformation('w_100/w_200/w_300');
   * @return {this}
   */
  addTransformation(tx: string | Transformation): this {
    if (tx instanceof Transformation) {
    // Concat the new actions into the existing actions
      this.actions = this.actions.concat(tx.actions);
    } else {
      this.actions.push(new RawAction(tx));
    }
    return this;
  }

  /**
   * @return {string}
   */
  toString(): string {
    return this.actions
      .map((action) => {
        return action.toString();
      })
      .filter((a) => a)
      .join('/');
  }

  /**
   * @description Adds a border around the image.
   * @param {Border} borderAction
   * @return {this}
   */
  border(borderAction: BorderAction): this{
    return this.addAction(borderAction);
  }

  /**
   * @description Adjusts the shape of the delivered image. </br>
   * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#image_shape_changes_and_distortion_effects|Shape changes and distortion effects}
   * @param {IReshape} reshapeAction
   * @return {this}
   */
  reshape(reshapeAction: IReshape): this {
    return this.addAction( reshapeAction);
  }

  /**
   * @description Resize the asset using provided resize action
   * @param {ResizeSimpleAction} resizeAction
   * @return {this}
   */
  resize(resizeAction: ResizeSimpleAction): this {
    return this.addAction(resizeAction);
  }

  /**
   * @param {DeliveryAction} quality
   * @return {this}
   */
  quality(quality: DeliveryAction): this {
    return this.addAction(quality);
  }

  /**
   * @description Rounds the specified corners of an image.
   * @param roundCornersAction
   * @return {this}
   */
  roundCorners(roundCornersAction: RoundCornersAction): this {
    return this.addAction(roundCornersAction);
  }

  /**
   * @description Adds an overlay over the base image.
   * @param {LayerAction} overlayAction
   * @return {this}
   */
  overlay(overlayAction: LayerAction): this {
    return this.addAction(overlayAction);
  }

  /**
   * @description Adds an underlay under the base image.
   * @param {LayerAction} underlayAction
   * @return {this}
   */
  underlay(underlayAction: LayerAction): this {
    underlayAction.setLayerType('u');
    return this.addAction(underlayAction);
  }

  /**
   * @description Defines an new user variable.
   * @param {VariableAction} variableAction
   * @return {this}
   */
  addVariable(variableAction: VariableAction): this {
    return this.addAction(variableAction);
  }

  /**
   * @description Specifies a condition to be met before applying a transformation.
   * @param {ConditionalAction} conditionAction
   * @return {this}
   */
  conditional(conditionAction: ConditionalAction): this {
    return this.addAction(conditionAction);
  }

  /**
   * @description Applies a filter or an effect on an asset.
   * @param {SimpleEffectAction} effectAction
   * @return {this}
   */
  effect(effectAction: EffectActions): this {
    return this.addAction(effectAction);
  }

  /**
   * @description Applies adjustment effect on an asset.
   * @param action
   * @return {this}
   */
  adjust(action: IAdjustAction): this {
    return this.addAction(action);
  }

  /**
   * @description Rotates the asset by the given angle.
   * @param {RotateAction} rotateAction
   * @return {this}
   */
  rotate(rotateAction: RotateAction): this {
    return this.addAction(rotateAction);
  }

  /**
   * @description Applies a pre-defined named transformation of the given name.
   * @param {NamedTransformation} namedTransformation
   * @return {this}
   */
  namedTransformation(namedTransformation:NamedTransformationAction ): this {
    return this.addAction(namedTransformation);
  }

  /**
   * @description Applies delivery action.
   * @param deliveryAction
   * @return {this}
   */
  delivery(deliveryAction: IDeliveryAction): this {
    return this.addAction(deliveryAction);
  }

  /**
   * @description Sets the color of the background.
   * @param {Qualifiers.Color} color
   * @return {this}
   */
  backgroundColor(color: SystemColors): this {
    return this.addAction(new BackgroundColor(prepareColor(color)));
  }

  /**
   * @description Adds a layer in a Photoshop document.
   * @param action
   * @return {this}
   */
  psdTools(action: SmartObjectAction | ClipAction | GetLayerAction): this {
    return this.addAction(action);
  }

  /**
   * @description Extracts an image or a page using an index, a range, or a name from a layered media asset.
   * @param action
   * @return {this}
   */
  extract(action: ExtractAction): this {
    return this.addAction(action);
  }

  /**
   * @description Adds a flag as a separate action.
   * @param {Qualifiers.Flag | string} flagQualifier
   * @return {this}
   */
  addFlag(flagQualifier: FlagQualifier | string): this {
    const action = new Action();
    let flagToAdd = flagQualifier;

    if (typeof flagQualifier === 'string') {
      flagToAdd = new FlagQualifier(flagQualifier);
    }

    action.addQualifier(flagToAdd);
    return this.addAction(action);
  }

  /**
   * @description Inject a custom function into the image transformation pipeline.
   * @return {this}
   */
  customFunction(customFunction: CustomFunctionAction): this {
    return this.addAction(customFunction);
  }

  /**
   * Transcodes the video (or audio) to another format.
   * @param {Action} action
   * @return {this}
   */
  transcode(action: ITranscodeAction): this {
    return this.addAction(action);
  }

  /**
   * Applies the specified video edit action.
   *
   * @param {videoEditType} action
   * @return {this}
   */

  videoEdit(action: videoEditType): this {
    return this.addAction(action);
  }
}

export {Transformation};

