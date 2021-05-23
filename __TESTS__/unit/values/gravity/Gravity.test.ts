import {Gravity} from "../../../../src/MediaEditing/qualifiers/gravity";

describe('Gravity Qualifier', () => {
  it ('Expects Gravity to include the four Gravity types', () => {
    expect(Gravity.autoGravity).toBeInstanceOf(Function);
    expect(Gravity.focusOn).toBeInstanceOf(Function);
    expect(Gravity.compass).toBeInstanceOf(Function);
  });
});
