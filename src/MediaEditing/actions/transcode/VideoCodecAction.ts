import {Action} from "../../internal/Action";
import {AdvVideoCodecType, VideoCodecType} from "../../qualifiers/videoCodecType/VideoCodecType";

/**
 * @extends SDK.Action
 * @memberOf Actions.Transcode
 * @description Converts a video to an animated webp or gif.
 * @see Visit {@link Actions.Transcode|Transcode} for an example
 */
class VideoCodecAction extends Action {
  constructor(videoCodecTypeQualifier : VideoCodecType | AdvVideoCodecType) {
    super();
    this.addQualifier(videoCodecTypeQualifier);
  }
}
export {VideoCodecAction};
