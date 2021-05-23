import {isString} from "../../../../src/MediaEditing/internal/utils/dataStructureUtils";

describe('Tests for isString', () => {
  it('checks if a value is a string', () => {
    expect(isString(1)).toBe(false);
    expect(isString({a:1})).toBe(false);
    expect(isString('1')).toBe(true);
    expect(isString(String('1'))).toBe(true);
  });
});
