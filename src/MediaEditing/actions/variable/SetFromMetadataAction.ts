import VariableAction from "./VariableAction";

/**
 * @description Sets a user-defined variable from structured metadata.
 * @memberOf Actions.Variable
 * @extends {Variable.VariableAction}
 * @see Visit {@link Actions.Variable|Variable} for an example
 */
class SetFromMetadataAction extends VariableAction {
  constructor(name: string, value: string) {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    /* istanbul ignore next */
    super(name, `md:!${value}!`);
  }
}

export default SetFromMetadataAction;
