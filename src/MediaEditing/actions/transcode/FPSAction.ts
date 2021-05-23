import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @extends SDK.Action
 * @memberOf Actions.Transcode
 * @description Controls the FPS (Frames Per Second) to ensure that video (even when optimized)
 * is delivered with
 * an expected FPS level (helps with sync to audio).
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_transformation_reference#video_settings | Video settings}
 * @see Visit {@link Actions.Transcode|Transcode} for an example
 */
class FPSAction extends Action {

  constructor(from: number) {
    super();
    this.addQualifier(new Qualifier('fps', from));
  }
}

export default FPSAction;
