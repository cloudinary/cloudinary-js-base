import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @description OpacityAction class, used to define the opacity of an asset
 * @memberOf Actions.Adjust
 * @extends SDK.Action
 */
class OpacityAdjustAction extends Action {
  constructor(level: number) {
    super();
    this.addQualifier(new Qualifier('o', level));
  }
}

export {OpacityAdjustAction};
