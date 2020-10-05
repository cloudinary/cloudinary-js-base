import LeveledEffectAction from "./LeveledEffectAction";

/**
 * @class EffectActionWithLength
 * @augments LeveledEffectAction
 * @description A class that provides a built in length() method that sets that level of the effect
 */
class EffectActionWithLength extends LeveledEffectAction {
  length(value: number | string): this {
    return this.setLevel(value);
  }
}

export default EffectActionWithLength;
