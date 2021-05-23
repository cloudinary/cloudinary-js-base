import VariableAction from "./VariableAction";

/**
 * @description Sets a user-defined variable from a file reference.
 * @memberOf Actions.Variable
 * @extends {Variable.VariableAction}
 * @see Visit {@link Actions.Variable|Variable} for an example
 */
class SetAssetReferenceAction extends VariableAction {
  constructor(name: string, value: string) {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    /* istanbul ignore next */

    const parsedValue = value
      .replace(/\//g, ':');

    super(name, `ref:!${parsedValue}!`);
  }
}

export default SetAssetReferenceAction;
