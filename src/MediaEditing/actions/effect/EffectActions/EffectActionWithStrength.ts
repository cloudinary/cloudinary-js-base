import {LeveledEffectAction} from "./LeveledEffectAction";

/**
 * @description A class for all effects that include a strength method
 * @extends {Actions.Effect.LeveledEffectAction}
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class EffectActionWithStrength extends LeveledEffectAction {
  strength(value: number | string): this {
    return this.setLevel(value);
  }
}

export {EffectActionWithStrength};
