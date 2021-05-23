import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";

/**
 * @extends SDK.Action
 * @memberOf Actions.Transcode
 * @description  Defines the video bitrate in bits per second.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#bitrate_control | Bitrate control}
 * @see Visit {@link Actions.Transcode|Transcode} for an example
 */
class BitRateAction extends Action {
  private bitRate: string|number;
  private isConstant = false;

  constructor(bitRate: string|number) {
    super();
    this.bitRate = bitRate;
  }
  /**
   * @description video plays with a constant bitrate (CBR).
   */
  constant(): this {
    this.isConstant = true;
    return this;
  }

  protected prepareQualifiers(): this {
    let qualifierValue;
    if(this.isConstant) {
      qualifierValue = new QualifierValue([this.bitRate, 'constant']).setDelimiter(':');
    }else {
      qualifierValue = new QualifierValue(this.bitRate);
    }
    this.addQualifier(new Qualifier('br', qualifierValue));
    return this;
  }
}

export default BitRateAction;
