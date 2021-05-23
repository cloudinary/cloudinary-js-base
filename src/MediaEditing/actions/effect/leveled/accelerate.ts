import {LeveledEffectAction} from "../EffectActions/LeveledEffectAction";

/**
 * @description Changes the speed of the video playback using the rate() method
 * @extends LeveledEffectAction
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class AccelerationEffectAction extends LeveledEffectAction {
  rate(value: number | string): this {
    return this.setLevel(value);
  }
}


export {AccelerationEffectAction};
