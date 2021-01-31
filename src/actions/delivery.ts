/**
 * @description Defines transformations for delivering your assets without changing the visual or audio experience for the end user.
 * @memberOf Actions
 * @namespace Delivery
 */

import {DeliveryFormat} from "./delivery/DeliveryFormat";
import {DeliveryQualityAction} from "./delivery/DeliveryQuality";
import {FormatQualifier} from "../qualifiers/format/FormatQualifier";
import {toFloatAsString} from "../internal/utils/toFloatAsString";
import {DeliveryColorSpaceFromICC} from "./delivery/DeliveryColorSpaceFromICC";
import {DeliveryAction} from "./delivery/DeliveryAction";

export type IDeliveryAction = DeliveryAction | DeliveryColorSpaceFromICC;


/**
 * @summary action
 * @description Defines the format of the delivered asset.
 *
 * <b>Learn more:</b>
 * {@link https://cloudinary.com/documentation/image_transformations#image_format_support | Image formats}
 * {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#transcoding_video_to_other_formats |
  * Video formats}
 *
 * @memberOf Actions.Delivery
 * @param {string} format The file format. For a list of supported format types see {@link Qualifiers.formatTypeValues|
  * format types} for
 * possible values
 * @return {Actions.Delivery.DeliveryFormat}
 */
function format(format:FormatQualifier | string) :DeliveryFormat {
  return new DeliveryFormat('f', format);
}



/**
 * @summary action
 * @description Deliver the image in the specified device pixel ratio.
 * @memberOf Actions.Delivery
 * @param {string} dpr The DPR (Device Pixel Ratio). Any positive float value.
 * @return {Actions.Delivery.DeliveryAction}
 */
function dpr(dpr: string|number):DeliveryAction {
  // toFloatAsString is used to ensure 1 turns into 1.0
  return new DeliveryAction('dpr', toFloatAsString(dpr));
}


/**
 * @summary action
 * @description Controls the quality of the delivered image or video.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_optimization#how_to_optimize_image_quality | Image quality}
 *  {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#quality_control | Video quality}
 * @memberOf Actions.Delivery
 * @param {string | number} qualityType For a list of supported quality types see {@link Qualifiers.qualityTypeValues| quality types} for
 * possible values.
 * @return {Actions.Delivery.DeliveryQualityAction}
 */
function quality(qualityType:string | number) :DeliveryQualityAction {
  return new DeliveryQualityAction(qualityType);
}

/**
 * @summary action
 * @description Controls the density to use when delivering an image or when converting a vector file such as a PDF or EPS
 * document to a web image delivery format.
 * @memberOf Actions.Delivery
 * @param {string} value The density in dpi.
 * @return {Actions.Delivery.DeliveryAction}
 */
function density(value:number) :DeliveryAction {
  return new DeliveryAction('dn', value);
}



/**
 * @summary action
 * @description Default images can be used in the case that a requested image does not exist.
 * @memberOf Actions.Delivery
 * @param {string} publicIdWithExtension Default image public ID
 * @return {Actions.Delivery.DeliveryAction}
 */
function defaultImage(publicIdWithExtension:string) :DeliveryAction {
  return new DeliveryAction('d', publicIdWithExtension);
}


/**
 * @summary action
 * @description Controls the color space used for the delivered image.
 * @memberOf Actions.Delivery
 * @param {string} mode The color space.
 * @return {Actions.Delivery.DeliveryAction}
 */
function colorSpace(mode:string): DeliveryAction {
  return new DeliveryAction('cs', mode);
}


/**
 * @summary action
 * @description Specifies the ICC profile to use for the color space.
 * The ICC file must be uploaded to your account as a raw, authenticated file.
 * @memberOf Actions.Delivery
 * @param {string} publicId The public ID (including the file extension) of the ICC profile that defines the
 * color space.
 * @return {Actions.Delivery.DeliveryColorSpaceFromICC}
 */
function colorSpaceFromICC(publicId:string) :DeliveryColorSpaceFromICC {
  return new DeliveryColorSpaceFromICC(publicId);
}




const Delivery = {
  format,
  dpr,
  density,
  defaultImage,
  colorSpace,
  colorSpaceFromICC,
  quality
};

export {Delivery, format, dpr, quality, density, defaultImage, colorSpace, colorSpaceFromICC};

