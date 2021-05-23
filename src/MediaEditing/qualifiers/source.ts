import {VideoSource} from "./source/sourceTypes/VideoSource";
import {ImageSource} from "./source/sourceTypes/ImageSource";
import {TextStyle} from "./textStyle";
import {SubtitlesSource} from "./source/sourceTypes/SubtitlesSource";
import {FetchSource} from "./source/sourceTypes/FetchSource";
import {TextSource} from "./source/sourceTypes/TextSource";

/**
 * @description This namespace contains different sources that can be used in overlays and underlays
 * @memberOf Qualifiers
 * @namespace Source
 * @see {@link Actions.Overlay| The overlay action}
 * @see {@link Actions.Underlay| The underlay action}
 */


/**
 * @summary qualifier
 * @description Returns an instance of an ImageSource
 * @memberOf Qualifiers.Source
 * @param {string} publicID The publicID of the image to be used as a layer
 * @return {Qualifiers.Source.ImageSource}
 */
function image(publicID: string): ImageSource {
  return new ImageSource(publicID);
}

/**
 * @summary qualifier
 * @description Returns an instance of a TextSource
 * @memberOf Qualifiers.Source
 * @param {string} text The text to display.
 * @param {TextStyle | string} textStyle The textStyle to use with the text in the layer
 * @return {Qualifiers.Source.TextSource}
 */
function text(text: string, textStyle: TextStyle | string): TextSource {
  return new TextSource(text, textStyle);
}

/**
 * @summary qualifier
 * @description Returns an instance of a VideoSource
 * @memberOf Qualifiers.Source
 * @param {string} publicID The publicID of the video to be used as a layer
 * @return {Qualifiers.Source.VideoSource}
 */
function video(publicID: string): VideoSource {
  return new VideoSource(publicID);
}

/**
 * @summary qualifier
 * @description Returns an instance of an VideoSource
 * @memberOf Qualifiers.Source
 * @param {string} fileName The publicID of the video to be used as a layer
 * @return {Qualifiers.Source.VideoSource}
 */
function subtitles(fileName: string): SubtitlesSource {
  return new SubtitlesSource(fileName);
}

/**
 * @summary qualifier
 * @description Returns an instance of a FetchSource
 * @memberOf Qualifiers.Source
 * @param {string} remoteURL The URL of the remote asset to fetch as a layer
 * @return {Qualifiers.Source.FetchSource}
 */
function fetch(remoteURL: string): FetchSource {
  return new FetchSource(remoteURL);
}


const Source = {image, text, video, subtitles, fetch};
export {Source, image, text, video, subtitles, fetch};
