import {base64Encode} from "../../internal/utils/base64Encode";
import {Action} from "../../internal/Action";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @memberOf Actions.CustomFunction
 * @see Visit {@link Actions.CustomFunction|Custom functions} for an example
 */
class CustomFunctionAction extends Action {
  private mode: 'wasm' | 'remote' | string;
  protected pre?: 'pre';
  readonly fn:string;
  private encodedFn: string;

  /**
   *
   * @param {string} fn The custom function to use, can be a URL or a publicID
   */
  constructor(fn: string) {
    super();
    this.fn = fn;
  }

  private encodeCustomFunctionString(fn:string):string {
    const encodedSource = base64Encode(fn);
    return encodedSource;
  }

  /**
   * Use a WASM as a custom function,
   * Used with the builders of `remote` and `wasm` from {@link Actions.CustomFunction|Custom functions}
   */
  asWasm(): this {
    this.mode = 'wasm';
    return this;
  }

  /**
   * Use a remote URL as a custom function
   * Used with the builders of `remote` and `wasm` from {@link Actions.CustomFunction|Custom functions}
   */
  asRemote(): this {
    this.mode = 'remote';
    return this;
  }

  protected prepareQualifiers():this {
    this.encodedFn = this.fn;
    if (this.mode === 'remote') {
      this.encodedFn = this.encodeCustomFunctionString(this.fn);
    }
    return this.addQualifier(new Qualifier('fn', new QualifierValue([this.pre, this.mode, this.encodedFn])));
  }

  toString() {
    return super.toString()
      .replace(/\//g, ':');
  }
}


export default CustomFunctionAction;
