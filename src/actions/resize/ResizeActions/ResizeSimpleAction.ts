import Qualifier from "../../../qualifier/Qualifier";
import Action from "../../Action";
import BackgroundAction from "../../background/BackgroundAction";
import {Flag} from "../../../values/flag/Flag";

class ResizeSimpleAction extends Action {
  constructor(cropType: string, cropWidth: number|string, cropHeight?: number|string) {
    super();
    if(cropWidth) {
      this.addQualifier(new Qualifier('w', cropWidth));
    }
    if(cropHeight) {
      this.addQualifier(new Qualifier('h', cropHeight));
    }
    this.addQualifier(new Qualifier('c', cropType));
  }

  height(x:number|string):this {
    return this.addQualifier(new Qualifier('h', x));
  }

  width(x:number|string):this {
    return this.addQualifier(new Qualifier('w', x));
  }

  /**
   * The methods below should not exist on the ResizeSimpleAction class
   * However they are currently unspecced, so it's TBD where they'll belong.
   */

  x(x:number): this {
    return this.addQualifier(new Qualifier('x', x));
  }

  zoom(z:number): this {
    return this.addQualifier(new Qualifier('z', z));
  }

  y(y:number): this {
    return this.addQualifier(new Qualifier('y', y));
  }

  background(backgroundAction: BackgroundAction): this {
    return this.addQualifier(backgroundAction);
  }

  resizeMode(modeType:string): this {
    this.addFlag(new Flag(modeType));

    return this;
  }
}


export default ResizeSimpleAction;
