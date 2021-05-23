import BitRateAction from "./transcode/BitRateAction";
import AudioCodecAction from "./transcode/AudioCodecAction";
import AudioFrequencyAction from "./transcode/AudioFrequencyAction";
import FPSAction from "./transcode/FPSAction";
import FPSRangeAction from "./transcode/FPSRangeAction";
import KeyframeIntervalsAction from "./transcode/KeyframeIntervalsAction";
import StreamingProfileAction from "./transcode/StreamingProfile";
import ToAnimatedAction from "./transcode/ToAnimatedAction";
import {AnimatedFormatQualifierValue} from "../qualifiers/animatedFormat/AnimatedFormatQualifierValue";
import {AdvVideoCodecType, VideoCodecType} from "../qualifiers/videoCodecType/VideoCodecType";
import {VideoCodecAction} from "./transcode/VideoCodecAction";


export type ITranscodeAction = BitRateAction
  | AudioCodecAction
  | AudioFrequencyAction
  | FPSAction
  | FPSRangeAction
  | KeyframeIntervalsAction
  | StreamingProfileAction
  | ToAnimatedAction
  | VideoCodecAction

/**
 * @description Defines how to transcode a video to another format
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#transcoding_video_to_other_formats | Transcoding video to other formats}
 * @memberOf Actions
 * @namespace Transcode
 * @example
 * // See examples under each method
 */

/**
 * @summary action
 * @memberOf Actions.Transcode
 * @description Sets the audio sample frequency.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/audio_transformations#audio_frequency_control | Audio frequency control}
 * @param {string|number} freq The audio frequency.
 * @example
 * import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";
 * import {FREQ11025} from '@cloudinary/base/qualifiers/audioFrequency'
 * import {audioFrequency} from '@cloudinary/base/actions/transcode'
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const video = yourCldInstance.video('dog');
 *
 * video.transcode(audioFrequency(FREQ11025()))
 * @return {Actions.Transcode.AudioFrequencyAction}
 *
 */
function audioFrequency(freq: string|number): AudioFrequencyAction{
  return new AudioFrequencyAction(freq);
}
/**
 * @summary action
 * @memberOf Actions.Transcode
 * @description Sets the audio codec or removes the audio channel.
 * @param {string} codec The audio codec or "none".
 * @example
 * import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";
 * import {aac} from '@cloudinary/base/qualifiers/audioCodec'
 * import {audioCodec} from '@cloudinary/base/actions/transcode'
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const video = yourCldInstance.video('dog');
 *
 * video.transcode( audioCodec( aac() ) );
 * @return {Actions.Transcode.AudioCodecAction}
 */
function audioCodec(codec: string): AudioCodecAction{
  return new AudioCodecAction(codec);
}
/**
 * @summary action
 * @memberOf Actions.Transcode
 * @description Controls the video bitrate.
 * Supported codecs: h264, h265 (MPEG-4); vp8, vp9 (WebM).
 *
 * <b>Learn more:</b>
 * {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#bitrate_control | Bitrate control}
 *
 * @param {string|number}  bitRate The number of bits used to represent the video data per second. By default the video
 *                             uses a variable bitrate (VBR), with this value indicating the maximum bitrate.
 *                             The value can be an integer e.g. 120000, or a string supporting "k" and "m"
 *                             (kilobits and megabits respectively) e.g. 250k or 2m.
 * @example
 * import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";
 * import {bitRate} from '@cloudinary/base/actions/transcode'
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const video = yourCldInstance.video('dog');
 *
 * video.transcode( bitRate(500).constant() );
 * @return {Actions.Transcode.BitRateAction}
 */
function bitRate(bitRate: string|number): BitRateAction {
  return new BitRateAction(bitRate);
}

/**
 * @summary action
 * @memberOf Actions.Transcode
 * @param {number} from frame rate
 * @example
 * import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";
 * import {fps} from '@cloudinary/base/actions/transcode'
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const video = yourCldInstance.video('dog');
 *
 * video.transcode( fps(15) );
 * @return {Actions.Transcode.FPSAction}
 */
function fps(from: number): FPSAction {
  return new FPSAction(from);
}

/**
 * @summary action
 * @memberOf Actions.Transcode
 * @description Controls the range of acceptable FPS (Frames Per Second) to ensure that video (even when optimized) is
 * delivered with an expected FPS level (helps with sync to audio).
 * @param {number} from frame rate
 * @param {number} to frame rate
 * @example
 * import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";
 * import {fpsRange} from '@cloudinary/base/actions/transcode'
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const video = yourCldInstance.video('dog');
 *
 * video.transcode( fpsRange( 20, 25 ) );
 * @return {Actions.Transcode.FPSRangeAction}
 */
function fpsRange(from: number, to?: number): FPSRangeAction {
  return new FPSRangeAction(from, to);
}

/**
 * @summary action
 * @memberOf Actions.Transcode
 * @description Sets the keyframe interval of the delivered video.
 * @param {number | string} interval The keyframe interval in seconds.
 * @example
 * import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";
 * import {keyframeInterval} from '@cloudinary/base/actions/transcode'
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const video = yourCldInstance.video('dog');
 *
 * video.transcode( keyframeInterval( 0.5 ) );
 * @return {Actions.Transcode.KeyframeIntervalsAction}
 */
function keyframeInterval(interval: number | string): KeyframeIntervalsAction {
  return new KeyframeIntervalsAction(interval);
}

/**
 * @summary action
 * @memberOf Actions.Transcode
 * @description Sets the streaming profile to apply to an HLS or MPEG-DASH adaptive bitrate streaming video.
 * The value can be one of the pre-defined streaming profiles or a custom-defined one.
 * You can use the streaming profiles methods of StreamingProfilesTrait to get a list of the available streaming
 * profiles or to create new custom profiles.
 * @param {string} profile The streaming profile.
 * @example
 * import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";
 * import {fullHd} from "@cloudinary/base/qualifiers/streamingProfile";
 * import {streamingProfile} from '@cloudinary/base/actions/transcode'
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const video = yourCldInstance.video('dog');
 *
 * video.transcode( streamingProfile( fullHd() ) );
 * @return {Actions.Transcode.StreamingProfileAction}
 */
function streamingProfile(profile: string): StreamingProfileAction {
  return new StreamingProfileAction(profile);
}

/**
 * @summary action
 * @memberOf Actions.Transcode
 * @description Converts a video to animated image.
 * @param {string} animatedFormat The streaming profile.
 * @example
 * import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";
 * import {gif} from '@cloudinary/base/qualifiers/animatedFormat'
 * import {toAnimated} from '@cloudinary/base/actions/transcode'
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const video = yourCldInstance.video('dog');
 *
 * video.transcode( toAnimated( gif() ) );
 * @return {Actions.Transcode.ToAnimatedAction}
 */
function toAnimated(animatedFormat: AnimatedFormatQualifierValue | string = ''): ToAnimatedAction {
  return new ToAnimatedAction(animatedFormat);
}

/**
 * @summary action
 * @memberOf Actions.Transcode
 * @description Controls the video codec.
 * @param {Qualifiers.VideoCodec.VideoCodecType | Qualifiers.VideoCodec.AdvVideoCodecType} videoCodecType CodecType
 * @example
 * import {Cloudinary} from "@cloudinary/base";
 * import {vp9} from '@cloudinary/base/qualifiers/videoCodec'
 * import {videoCodec} from '@cloudinary/base/actions/transcode'
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const video = yourCldInstance.video('dog');
 *
 * video.transcode( videoCodec( vp9() ) );
 * @return {Actions.Transcode.VideoCodecAction}
 */
function videoCodec(videoCodecType: VideoCodecType | AdvVideoCodecType): VideoCodecAction {
  return new VideoCodecAction(videoCodecType);
}

const Transcode = {bitRate, audioCodec, audioFrequency, fps, fpsRange, keyframeInterval, streamingProfile, toAnimated, videoCodec};
export {Transcode, bitRate, audioCodec, audioFrequency, fps, fpsRange, keyframeInterval, streamingProfile, toAnimated, videoCodec};
