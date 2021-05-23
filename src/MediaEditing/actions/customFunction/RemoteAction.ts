import CustomFunctionAction from "./CustomFunctionAction";

class RemoteAction extends CustomFunctionAction {
  constructor(fn: string) {
    /* istanbul ignore next */
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    super(fn);
  }
  preprocess(): this {
    this.pre = 'pre';
    return this;
  }
}

export default RemoteAction;
