import TrimAction from './videoEdit/TrimAction';
import ConcatenateAction from './videoEdit/ConcatenateAction';
import VolumeAction from "./videoEdit/VolumeAction";
import {VideoSource} from "../qualifiers/source/sourceTypes/VideoSource";
import {PreviewAction} from "./videoEdit/PreviewAction";

/**
 * @summary action
 * @description Methods for editing a video.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/video_manipulation_and_delivery | Video manipulation}
 * @memberOf Actions
 * @namespace VideoEdit
 * @example
 * See the examples under every method
 */

/**
 * @summary action
 * @description Concatenates another video.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#concatenating_videos | Concatenating videos}
 *
 * @memberOf Actions.VideoEdit
 * @param {VideoSource} source The source to concatenate.
 * @return {Actions.VideoEdit.ConcatenateAction}
 * @example
 * import {Cloudinary} from "@cloudinary/base";
 * import {concatenate} from "@cloudinary/base/actions/videoEdit";
 * import {videoSource as concatVideoSource} from "@cloudinary/base/qualifiers/concatenate";
 * import {videoSource as tVideoSource} from "@cloudinary/base/qualifiers/transition";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const video = yourCldInstance.video('dog');
 *
 * video.videoEdit( concatenate(concatVideoSource('butterfly'))
 *  .transition(tVideoSource('myTransition'))
 *  .duration(5)
 * )
 */
function concatenate(source:VideoSource):ConcatenateAction{
  return new ConcatenateAction(source);
}

/**
 * @summary action
 * @description Trims a video (and discards the rest).
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#trimming_videos |
  * Trimming videos}
 *
 * @memberOf Actions.VideoEdit
 * @return {Actions.VideoEdit.TrimAction}
 * @example
 * import {Cloudinary} from "@cloudinary/base";
 * import {trim} from "@cloudinary/base/actions/videoEdit";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const video = yourCldInstance.video('dog');
 *
 * video.videoEdit( trim()
 *  .startOffset(3)
 *  .endOffset(4)
 *  .duration(10)
 * )
 */
function trim(): TrimAction{
  return new TrimAction();
}

/**
 * @summary action
 * @description Increases or decreases the volume by a percentage of the current volume.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/audio_transformations#adjust_the_audio_volume |
  * Adjust the audio volume}
 *
 * @memberOf Actions.VideoEdit
 * @param {string | number} volumeValue The value of volume. The percentage change of volume (Range: -100 to 400).
 * For a list of supported types see {@link Qualifiers.Volume| Volume values}
 * @return {Actions.VideoEdit.VolumeAction}
 * @example
 * import {Cloudinary} from "@cloudinary/base";
 * import {volume} from "@cloudinary/base/actions/videoEdit";
 * import {mute} from '@cloudinary/base/qualifiers/volume';
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const video = yourCldInstance.video('dog');
 *
 * video.videoEdit( volume(10) ) // as percent
 * video.videoEdit( volume('5db') ) // as decibels
 * video.videoEdit( volume(mute()) ) // if you prefer silence..
 */
function volume(volumeValue: string | number): VolumeAction{
  return new VolumeAction(volumeValue);
}

/**
 * @summary action
 * @description A video preview is a short excerpt from a video that can be used to engage your audience and help them select the video content that interests them.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#generate_an_ai_based_video_preview |
  * Create a video preview}
 *
 * @memberOf Actions.VideoEdit
 * @return {Actions.VideoEdit.PreviewAction}
 * @example
 * import {Cloudinary} from "@cloudinary/base";
 * import {preview} from "@cloudinary/base/actions/videoEdit";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const video = yourCldInstance.video('dog');
 *
 * video.videoEdit( preview()
 *  .duration(5)
 *  .minimumSegmentDuration(1)
 *  .maximumSegments(10)
 * )
 */
function preview(): PreviewAction{
  return new PreviewAction();
}

export declare type videoEditType = VolumeAction | TrimAction | ConcatenateAction | PreviewAction;

const VideoEdit = {concatenate, trim, volume, preview};
export {VideoEdit, concatenate, trim, volume, preview};
