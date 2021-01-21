import {FocusOnValue} from "../../focusOn";
import {GravityQualifier} from "../GravityQualifier";
import {AutoGravity} from "../autoGravity/AutoGravity";

/**
 * @description The class for the FocusOn builder
 * @memberOf Values.Gravity
 * @extends {Values.Gravity.GravityQualifier}
 */
class FocusOnGravity extends GravityQualifier {
  constructor(FocusOnObjects: FocusOnValue[]) {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    /* istanbul ignore next */
    super(FocusOnObjects);
  }

  /**
   * @description Specifies the gravity to use if none of the other gravity objects are found.
   * @param {Values.Gravity.AutoGravity} val
   */
  fallbackGravity(val: AutoGravity): this {
    /*
     *  FocusOnGravity(this) is already a qualifier, with a key and a value g_{obj1}
     *  fallBackGravity also attempts to add a value, to reach the result of g_{obj1}:auto:{obj2}
     *  Since AutoGravity is a Qualifier, it also comes with its own g_ key, which needs to be removed.
     *  To solve it, we take only the value from the qualifier, instead of the whole thing
     */
    this.addValue(val.qualifierValue);
    return this;
  }
}

export {FocusOnGravity};
