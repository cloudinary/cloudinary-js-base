import {toFloatAsString} from "../../../src/MediaEditing/internal/utils/toFloatAsString";

describe('Tests for toFloatAsString', () => {
  it('Test string input', () => {
    expect(toFloatAsString('0')).toBe('0.0');
    expect(toFloatAsString('-1')).toBe('-1.0');
    expect(toFloatAsString('1')).toBe('1.0');
    expect(toFloatAsString('1.2')).toBe('1.2');
  });

  it('Test number input', () => {
    expect(toFloatAsString(0)).toBe('0.0');
    expect(toFloatAsString(-1)).toBe('-1.0');
    expect(toFloatAsString(1)).toBe('1.0');
    expect(toFloatAsString(1.2)).toBe('1.2');
  });

  it('Test string input that is not a number is not changed', () => {
    expect(toFloatAsString('0000')).toBe('0000');
    expect(toFloatAsString('0x')).toBe('0x');
    expect(toFloatAsString('.1')).toBe('.1');
    expect(toFloatAsString('1..0')).toBe('1..0');
    expect(toFloatAsString('abcd')).toBe('abcd');
    expect(toFloatAsString('abcd.55')).toBe('abcd.55');
    expect(toFloatAsString('123/abcd')).toBe('123/abcd');
  });

  it ('Test input with decimal does not change', () => {
    expect(toFloatAsString('1.0')).toBe('1.0');
    expect(toFloatAsString('1.00')).toBe('1.00');
    expect(toFloatAsString('1.2')).toBe('1.2');
    expect(toFloatAsString('1.0005')).toBe('1.0005');
  });
});
