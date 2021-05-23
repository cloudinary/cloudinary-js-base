import {Qualifier} from "../../internal/qualifier/Qualifier";


/**
 * @description A VideoCodec class, this class has no methods, and just sets the codec type (vp9, vp8, etc.)
 * @memberOf Qualifiers.VideoCodec
 */
class VideoCodecType extends Qualifier {
  constructor(type: string) {
    super('vc');
    this.addValue(type);
  }
}

/**
 * @description An Advanced VideoCodec class with Profile and Level methods
 * @memberOf Qualifiers.VideoCodec
 */
class AdvVideoCodecType extends Qualifier{
  private _prof: string;
  private _lvl: number | string
  private readonly _type: string

  constructor(type: string) {
    super('vc');
    this._type = type;
  }

  /**
   * @description Specifies the profile to use with the h264 codec.
   * @param {Qualifiers.VideoCodecProfile | string} profile Sets the profile of the video codec
   * @example new AdvVideoCodecType('h264').profile(VideoCodecProfile.baseline())
   * @return this;
   */
  profile(profile: string): this {
    this._prof = profile;
    return this;
  }

  /**
   * @description Specifies the level to use with the h264 codec and specified profile.
   * @param {Qualifiers.VideoCodecLevel | number | string} lvl
   * @example new AdvVideoCodecType('h264').profile(VideoCodecLevel.baseline())
   * @return this;
   */
  level(lvl: number | string): this {
    this._lvl = lvl;
    return this;
  }

  /**
   * @description returns a toString representation of this qualifier
   * @return string;
   */
  toString(): string {
    return `vc_${this._type}:${this._prof}:${this._lvl}`;
  }
}


export {VideoCodecType, AdvVideoCodecType};
