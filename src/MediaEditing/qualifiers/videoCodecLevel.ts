/**
 * @description Contains functions to select the video codec level.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#video_codec_settings | Video codec settings}
 * @memberOf Qualifiers
 * @namespace VideoCodecLevel
 * @see Visit {@link Actions.Transcode|Transcode} for an example
 */


/**
 * @summary qualifier
 * @memberOf Qualifiers.VideoCodecLevel
 * @return {number}
 */
function vcl30(): '3.0' { return '3.0'; }

/**
 * @summary qualifier
 * @memberOf Qualifiers.VideoCodecLevel
 * @return {number}
 */
function vcl31(): 3.1 { return 3.1; }

/**
 * @summary qualifier
 * @memberOf Qualifiers.VideoCodecLevel
 * @return {number}
 */
function vcl40(): '4.0' { return '4.0'; }

/**
 * @summary qualifier
 * @memberOf Qualifiers.VideoCodecLevel
 * @return {number}
 */
function vcl41(): 4.1 { return 4.1; }

/**
 * @summary qualifier
 * @memberOf Qualifiers.VideoCodecLevel
 * @return {number}
 */
function vcl42(): 4.2 { return 4.2; }

/**
 * @summary qualifier
 * @memberOf Qualifiers.VideoCodecLevel
 * @return {number}
 */
function vcl50(): '5.0' { return '5.0'; }

/**
 * @summary qualifier
 * @memberOf Qualifiers.VideoCodecLevel
 * @return {number}
 */
function vcl51(): 5.1 { return 5.1; }

/**
 * @summary qualifier
 * @memberOf Qualifiers.VideoCodecLevel
 * @return {number}
 */
function vcl52(): 5.2 { return 5.2; }


const VideoCodecLevel = { vcl30, vcl31, vcl40, vcl41, vcl42, vcl50, vcl51, vcl52 };

export { vcl30, vcl31, vcl40, vcl41, vcl42, vcl50, vcl51, vcl52, VideoCodecLevel};
