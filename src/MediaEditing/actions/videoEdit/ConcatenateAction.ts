import {Action} from "../../internal/Action";
import {Transformation} from "../../transformation/Transformation";
import {VideoSource} from "../../qualifiers/source/sourceTypes/VideoSource";
import {ImageSource} from "../../qualifiers/source/sourceTypes/ImageSource";
import {FetchSource} from "../../qualifiers/source/sourceTypes/FetchSource";

/**
 * @description Class for Concatenating another video.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#concatenating_videos | Concatenating videos}
 * @extends SDK.Action
 * @memberOf Actions.VideoEdit
 * @see Visit {@link Actions.VideoEdit|VideoEdit} for an example
 */
class ConcatenateAction extends Action {
  private concatSource: VideoSource | ImageSource | FetchSource;
  private _prepend: boolean;
  private _duration: number;
  private _transition: VideoSource;

  /**
   *
   * @param {Qualifiers.Source.VideoSource | Qualifiers.Source.ImageSource | Qualifiers.Source.FetchSource} source
   *         the Source to concatenate
   */
  constructor(source: VideoSource | ImageSource | FetchSource) {
    super();
    this.concatSource = source;
  }

  /**
   * @description Sets the transition between a video and a concatenated source
   * @param {Qualifiers.Transition.VideoSource} source The source to concatenate.
   * @return {this}
   */
  transition(source: VideoSource): this {
    this._transition = source;
    return this;
  }

  /**
   * @description Prepend the concatenated video - Adds the video before the original
   * @return {this}
   */
  prepend(): this {
    this._prepend = true;
    return this;
  }

  /**
   * The duration in seconds
   * @param {number} sec
   * @return {this}
   */
  duration(sec: number): this {
    this._duration = sec;
    return this;
  }

  /**
   * @description Get the transitionString for the toString() method
   * @return {string}
   */
  getTransitionString(): string {
    const transTx = this._transition.getTransformation();
    return [
      `e_transition,${this._transition.getOpenSourceString('l')}`,
      transTx && transTx.toString(),
      'fl_layer_apply'
    ].filter((a) => a).join('/');
  }

  /**
   * @description Get the string representation of the Concatenation action
   */
  toString(): string {
    /*
     *
     * The toString() method is composed of several steps due to the complex nature of the concatenate transformation.
     *
     * First, we calculate the open and close parts of the top-level transformation:
     *   - {open}/{sourceTransformation}/{close}
     *
     * Unlike a regular overlay, there are multiple 'bits' appended to the open and close parts of the tx.
     * - duration (du_) might be prepended on the opening of the layer (du_5,l_sample)
     * - fl_splice is also added, but only if a transition is not needed.
     *
     * once we've calculated the open and close parts, we now need to deal with the Transition.
     * the transition is an inner transformation on the source with a special effect (e_transition) appended to it.
     *
     * To calculate the transition string, we need to take the transformation from the source(assuming it has one)
     */

    // Calculate the open part
    const open = [
      this._duration && `du_${this._duration}`,
      !this._transition && `fl_splice`,
      `${this.concatSource.getOpenSourceString('l')}`
    ].filter((a) => a).join(',');

    // Calculate the open part
    const close = [
      'fl_layer_apply',
      this._prepend && 'so_0'
    ].filter((a) => a).join(',');


    // Calculate the Transition part
    let concatSourceTx;
    if (this.concatSource.getTransformation()) {
      concatSourceTx = this.concatSource.getTransformation();
    } else {
      concatSourceTx = new Transformation();
    }

    if (this._transition) {
      concatSourceTx.addTransformation(this.getTransitionString());
    }

    // Put it all together, the transition is already part of the concatSourceTx
    return [
      open,
      concatSourceTx.toString(),
      close
    ].filter((a) => a).join('/');
  }
}

export default ConcatenateAction;
