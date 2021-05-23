import {LeveledEffectAction} from "./LeveledEffectAction";

/**
 * @description A class that provides a built in level() method that sets the level of the effect
 * @extends {Actions.Effect.LeveledEffectAction}
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class EffectActionWithLevel extends LeveledEffectAction {
  level(value: number | string): this {
    return this.setLevel(value);
  }
}

export {EffectActionWithLevel};
