import {FocusOn} from "../../../../src/MediaEditing/qualifiers/focusOn";
import {Gravity} from "../../../../src/MediaEditing/qualifiers/gravity";
import {AutoFocus} from "../../../../src/MediaEditing/qualifiers/autoFocus";

describe('FocusOn Gravity Qualifier', () => {
  it('Expects focusOn to return {object}', () => {
    expect(FocusOn.refrigerator().toString()).toBe('refrigerator');
    expect(FocusOn.sink().toString()).toBe('sink');
    expect(FocusOn.skateboard().toString()).toBe('skateboard');
    expect(FocusOn.person().toString()).toBe('person');
    expect(FocusOn.face().toString()).toBe('face');
    expect(FocusOn.horse().toString()).toBe('horse');
    expect(FocusOn.pottedplant().toString()).toBe('pottedplant');
    expect(FocusOn.sheep().toString()).toBe('sheep');
    expect(FocusOn.sofa().toString()).toBe('sofa');
    expect(FocusOn.train().toString()).toBe('train');
    expect(FocusOn.faces().toString()).toBe('faces');
    expect(FocusOn.advancedEyes().toString()).toBe('adv_eyes');
    expect(FocusOn.advancedFace().toString()).toBe('adv_face');
    expect(FocusOn.advancedFaces().toString()).toBe('adv_faces');
    expect(FocusOn.aeroplane().toString()).toBe('aeroplane');
    expect(FocusOn.background().toString()).toBe('background');
    expect(FocusOn.bicycle().toString()).toBe('bicycle');
    expect(FocusOn.bird().toString()).toBe('bird');
    expect(FocusOn.boat().toString()).toBe('boat');
    expect(FocusOn.bottle().toString()).toBe('bottle');
    expect(FocusOn.bus().toString()).toBe('bus');
    expect(FocusOn.car().toString()).toBe('car');
    expect(FocusOn.cat().toString()).toBe('cat');
    expect(FocusOn.chair().toString()).toBe('chair');
    expect(FocusOn.dog().toString()).toBe('dog');
    expect(FocusOn.cow().toString()).toBe('cow');
    expect(FocusOn.diningtable().toString()).toBe('diningtable');
    expect(FocusOn.tvmonitor().toString()).toBe('tvmonitor');
    expect(FocusOn.microwave().toString()).toBe('microwave');
    expect(FocusOn.motorbike().toString()).toBe('motorbike');
  });

  it('Expects Gravity.focusOn to return g_{object}', () => {
    expect(Gravity.focusOn(FocusOn.cat()).toString()).toBe('g_cat');
    expect(Gravity.focusOn(FocusOn.person()).toString()).toBe('g_person');
  });

  it('Expects multiple objects to return g_{obj}:{obj}', () => {
    expect(Gravity.focusOn(
      FocusOn.cat(),
      FocusOn.dog(),
      FocusOn.person()
    ).toString()).toBe('g_cat:dog:person');
  });

  it('Accepts a fallback AutoFocus gravity', () => {
    const str = Gravity
      .focusOn(FocusOn.cat(), FocusOn.dog())
      .fallbackGravity(
        Gravity.autoGravity()
          .autoFocus(
            AutoFocus.focusOn(FocusOn.microwave()).weight(30),
            AutoFocus.focusOn(FocusOn.bicycle()).avoid()
          )
      )
      .toString();

    expect(str).toBe('g_cat:dog:auto:microwave_30:bicycle_avoid');
  });
});
