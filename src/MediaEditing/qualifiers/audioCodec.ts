/**
 * @description Contains functions to select an audio codec.
 * @memberOf Qualifiers
 * @namespace AudioCodec
 * @see Visit {@link Actions.Transcode|Transcode} for an example
 */

/**
 * @summary qualifier
 * @description Removes the audio channel from the video, effectively muting it.
 * @memberOf Qualifiers.AudioCodec
 */
function none(): string {
  return 'none';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.AudioCodec
 */
function aac(): string {
  return 'aac';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.AudioCodec
 */
function vorbis(): string {
  return 'vorbis';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.AudioCodec
 */
function mp3(): string {
  return 'mp3';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.AudioCodec
 */
function opus(): string {
  return 'opus';
}


const AudioCodec = {
  aac,
  mp3,
  opus,
  none,
  vorbis
};

export {
  AudioCodec,
  aac,
  mp3,
  opus,
  none,
  vorbis
};


