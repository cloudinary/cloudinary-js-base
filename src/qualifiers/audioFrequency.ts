/**
 * @description Controls the audio sampling frequency.
 * @namespace AudioFrequency
 * @memberOf Qualifiers
 */


/**
 * @description Preserves the original audio frequency of the video when used with vc_auto.
 * @memberOf Qualifiers.AudioFrequency
 */
function ORIGINAL(): string {
  return 'iaf';
}

/**
 * @memberOf Qualifiers.AudioFrequency
 */
function FREQ192000(): number {
  return 192000;
}

/**
 * @memberOf Qualifiers.AudioFrequency
 */
function FREQ176400(): number {
  return 176400;
}


/**
 * @memberOf Qualifiers.AudioFrequency
 */
function FREQ96000(): number {
  return 96000;
}


/**
 * @memberOf Qualifiers.AudioFrequency
 */
function FREQ88200(): number {
  return 88200;
}


/**
 * @memberOf Qualifiers.AudioFrequency
 */
function FREQ48000(): number {
  return 48000;
}

/**
 * @memberOf Qualifiers.AudioFrequency
 */
function FREQ8000(): number {
  return 8000;
}

/**
 * @memberOf Qualifiers.AudioFrequency
 */
function FREQ11025(): number {
  return 11025;
}

/**
 * @memberOf Qualifiers.AudioFrequency
 */
function FREQ16000(): number {
  return 16000;
}

/**
 * @memberOf Qualifiers.AudioFrequency
 */
function FREQ22050(): number {
  return 22050;
}

/**
 * @memberOf Qualifiers.AudioFrequency
 */
function FREQ32000(): number {
  return 32000;
}

/**
 * @memberOf Qualifiers.AudioFrequency
 */
function FREQ37800(): number {
  return 37800;
}

/**
 * @memberOf Qualifiers.AudioFrequency
 */
function FREQ44056(): number {
  return 44056;
}

/**
 * @memberOf Qualifiers.AudioFrequency
 */
function FREQ44100(): number {
  return 44100;
}

/**
 * @memberOf Qualifiers.AudioFrequency
 */
function FREQ47250(): number {
  return 47250;
}



const AudioFrequency = {
  FREQ8000,
  FREQ11025,
  FREQ16000,
  FREQ22050,
  FREQ32000,
  FREQ37800,
  FREQ44056,
  FREQ44100,
  FREQ47250,
  FREQ48000,
  FREQ88200,
  FREQ96000,
  FREQ176400,
  FREQ192000,
  ORIGINAL
};

export {
  AudioFrequency,
  FREQ8000,
  FREQ11025,
  FREQ16000,
  FREQ22050,
  FREQ32000,
  FREQ37800,
  FREQ44056,
  FREQ44100,
  FREQ47250,
  FREQ48000,
  FREQ88200,
  FREQ96000,
  FREQ176400,
  FREQ192000,
  ORIGINAL
};