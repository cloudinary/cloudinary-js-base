/**
 * @description Round one or more corners of an image or video.
 *
 * <b>Learn more:</b>
 * {@link https://cloudinary.com/documentation/image_transformations#rounding_corners_and_creating_circular_images | Rounded images}
 * {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#rounding_corners_and_creating_circular_videos | Rounded videos}
 * @memberOf Actions
 * @namespace RoundCorners
 * @example
 * <caption>Round corners by a radius</caption>
 * import {Cloudinary} from "@cloudinary/base";
 * import {byRadius, max} from "@cloudinary/base/actions/roundCorners";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 * // By a radius
 * image.roundCorners(byRadius(10));
 * // Or just the maximum possible
 * image.roundCorners(max());
 * image.toURL();
 */

import byRadius from './roundCorners/byRadius';
import max from './roundCorners/max';

const RoundCorners = {byRadius, max};
export {RoundCorners, byRadius, max};

