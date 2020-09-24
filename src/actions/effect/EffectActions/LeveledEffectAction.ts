import SimpleEffectAction from "./SimpleEffectAction";

/**
 * @class LeveledEffectAction
 * @augments SimpleEffectAction
 * @description
 * A base class for effects with a level, the extending class needs to implement a method that calls setLevel()
 */
class LeveledEffectAction extends SimpleEffectAction {
  protected effectType: string;
  constructor(effectType?: string, level?: number|string) {
    super(effectType, level);
    this.effectType = effectType;
  }

  /**
   *
   * @description Sets the effect level for the action
   * @param {string | number} level - The strength of the effect
   * @protected
   */
  protected setLevel(level: string | number): this {
    const qualifierEffect = this.createEffectParam(this.effectType, level);
    this.addQualifier(qualifierEffect);
    return this;
  }
}

export default LeveledEffectAction;
