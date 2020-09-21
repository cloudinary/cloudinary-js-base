class QualifierValue {
  values: unknown[] = [];
  delimiter = ':'; // {value}{delimiter}{value}...

  constructor(qualifierValue?: QualifierValue | QualifierValue[] | unknown[] | string | number) {
    if (this.hasValue(qualifierValue)) {
      this.addValue(qualifierValue);
    }
  }
  toString(): string {
    return this.values.join(this.delimiter);
  }

  private hasValue(v:unknown): boolean {
    return typeof v !== 'undefined' && v !== null && v !== '';
  }

  addValue(value: unknown): this {
    // Append value or array of values
    if (Array.isArray(value)) {
      this.values = this.values.concat(value);
    } else {
      this.values.push(value);
    }
    // Remove falsy values
    this.values = this.values.filter((v) => this.hasValue(v));

    return this;
  }

  setDelimiter(delimiter: string): this {
    this.delimiter = delimiter;

    return this;
  }
}

export default QualifierValue;