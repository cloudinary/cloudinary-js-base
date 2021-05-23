import {QualifierValue} from '../../../src/MediaEditing/internal/qualifier/QualifierValue';

describe('Tests for Qualifier', () => {
  it('Creates a QualifierValue', () => {
    const qualifierValue = new QualifierValue();
    expect(qualifierValue.toString()).toBe('');
  });
  it('Creates a QualifierValue with single value', () => {
    const qualifierValue = new QualifierValue().addValue(90);

    expect(qualifierValue.toString()).toBe('90');
  });
  it('Creates a QualifierValue with multiple values', () => {
    const qualifierValue = new QualifierValue().addValue(90).addValue(80);

    expect(qualifierValue.toString()).toBe('90:80');
  });

});
