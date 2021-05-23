import {Action} from "../../internal/Action";
import {FormatQualifier} from "../../qualifiers/format/FormatQualifier";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @description Qualifies the delivery of an asset.
 * @memberOf Actions.Delivery
 * @extends SDK.Action
 */
class DeliveryAction extends Action {

  /**
   * @param {string} deliveryKey A generic Delivery Action Key (such as q, f, dn, etc.)
   * @param {string} deliveryType A Format Qualifiers for the action, such as Quality.auto()
   * @see Visit {@link Actions.Delivery|Delivery} for an example
   */
  constructor(deliveryKey?: string, deliveryType?: FormatQualifier | string|number) {
    super();
    this.addQualifier(new Qualifier(deliveryKey, deliveryType));
  }
}

export {DeliveryAction};
