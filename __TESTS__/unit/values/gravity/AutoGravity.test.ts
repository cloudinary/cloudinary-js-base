import {Gravity} from "../../../../src/MediaEditing/qualifiers/gravity";
import {AutoFocus} from "../../../../src/MediaEditing/qualifiers/autoFocus";
import {FocusOn} from "../../../../src/MediaEditing/qualifiers/focusOn";

describe('Gravity Qualifier', () => {
  it('AutoGravity should return g_auto by default', () => {
    const gAutoStr = Gravity.autoGravity().toString();
    expect(gAutoStr).toBe('g_auto');
  });

  it('AutoGravity with focus should return g_auto:{obj}', () => {
    const gAutoStr = Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.person())).toString();
    expect(gAutoStr).toBe('g_auto:person');
  });

  it('AutoGravity with focus should return g_auto:{obj}:{obj}', () => {
    const gAutoStr = Gravity.autoGravity().autoFocus(
      AutoFocus.focusOn(FocusOn.person()),
      AutoFocus.focusOn(FocusOn.cat())
    ).toString();

    expect(gAutoStr).toBe('g_auto:person:cat');
  });

  it('AutoGravity with weight and avoid', () => {
    const gAutoStr = Gravity.autoGravity().autoFocus(
      AutoFocus.focusOn(FocusOn.person()).weight(100),
      AutoFocus.focusOn(FocusOn.cat()).avoid()
    ).toString();

    expect(gAutoStr).toBe('g_auto:person_100:cat_avoid');
  });
});
