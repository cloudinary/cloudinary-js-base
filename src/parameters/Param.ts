import ParamValue from './ParamValue';

class Param {
  key: string;
  paramValue: ParamValue;
  delimiter = '_'; // {key}{delimiter}{paramValue}

  constructor(key: string, paramValue?: ParamValue | ParamValue[] | number | string | (string | number)[]) {
    this.key = key;
    if (paramValue instanceof ParamValue) {
      this.paramValue = paramValue;
    } else {
      this.paramValue = new ParamValue();
      this.paramValue.addValue(paramValue).setDelimiter('.');
    }
  }

  toString(): string {
    const {key, delimiter, paramValue} = this;

    return `${key}${delimiter}${paramValue.toString()}`;
  }

  addValue(value: unknown): this {
    this.paramValue.addValue(value);

    return this;
  }
}

export default Param;
