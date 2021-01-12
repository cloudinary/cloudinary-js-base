import {Qualifier} from "../../internal/qualifier/Qualifier";


/**
 * @doc
 * @description A VideoCodec class, this class has no methods, and just sets the codec type (vp9, vp8, etc.)
 * @memberOf Values.VideoCodec
 */
class VideoCodecType extends Qualifier {
  constructor(type: string) {
    super('vc');
    this.addValue(type);
  }
}

/**
 * @doc
 * @description An Advanced VideoCodec class with Profile and Level methods
 * @memberOf Values.VideoCodec
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
   * @doc
   * @param {Values.VideoCodecProfile | string} profile Sets the profile of the video codec
   * @example new AdvVideoCodecType('h264').profile(VideoCodecProfile.baseline())
   * @return this;
   */
  profile(profile: string): this {
    this._prof = profile;
    return this;
  }

  /**
   * @doc
   * @description Sets the level of the videoCodec
   * @param {Values.VideoCodecLevel | number | string} lvl
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