import * as Gravity from "../../../src/values/gravity/Gravity";
import * as GravityObjects from "../../../src/values/gravityObjects/GravityObjects";
import {AutoGravity} from "../../../src/values/gravityObjects/GravityObjects";
import {Compass} from "../../../src/values/compass/Compass";



describe('Gravity Qualifier', () => {

  it('Tests Compass gravity qualifier', () => {
    expect(Compass.center().toString()).toBe('g_center');
    expect(Compass.east().toString()).toBe('g_east');
    expect(Compass.west().toString()).toBe('g_west');
    expect(Compass.north().toString()).toBe('g_north');
    expect(Compass.south().toString()).toBe('g_south');
    expect(Compass.northWest().toString()).toBe('g_north_west');
    expect(Compass.southEast().toString()).toBe('g_south_east');
  });

  it.skip('Tests simple gravitation', () => {
    expect(Gravity.auto().toString()).toBe('g_auto');
    expect(Gravity.face().toString()).toBe('g_face');
    expect(Gravity.faces().toString()).toBe('g_faces');
    expect(Gravity.advancedFace().toString()).toBe('g_adv_face');
    expect(Gravity.advancedFaces().toString()).toBe('g_adv_faces');
    expect(Gravity.advancedEyes().toString()).toBe('g_adv_eyes');
    expect(Gravity.ocrText().toString()).toBe('g_ocr_text');
  });

  it('Tests gravity objects - Singular', () => {
    expect(Gravity.focusOn(GravityObjects.cat()).toString()).toBe('g_cat');
  });

  it('Tests gravity objects - Many', () => {
    expect(Gravity.focusOn(GravityObjects.cat(), GravityObjects.dog()).toString()).toBe('g_cat:dog');
  });

  it('Tests Gravity.auto() with objects', () => {
    expect(Gravity.auto(GravityObjects.cat(), GravityObjects.dog()).toString()).toBe('g_auto:cat:dog');
  });

  it('Tests Gravity.auto() with AutoGravity.classic', () => {
    expect(Gravity.auto(AutoGravity.classic()).toString()).toBe('g_auto:classic');
  });

  it('Tests Gravity.auto() with AutoGravity with object', () => {
    expect(Gravity.auto(AutoGravity.object(GravityObjects.cat())).toString()).toBe('g_auto:cat');
  });

  it('Tests Gravity.auto() with AutoGravity with subject', () => {
    expect(Gravity.auto(AutoGravity.subject()).toString()).toBe('g_auto:subject');
  });

  it('Tests Gravity.auto() with AutoGravity with object avoid', () => {
    expect(Gravity.auto(AutoGravity.object(GravityObjects.cat()).avoid()).toString()).toBe('g_auto:cat_avoid');
  });

  it('Tests Gravity.auto() with AutoGravity with object weighed', () => {
    expect(Gravity.auto(AutoGravity.object(GravityObjects.cat(), -100)).toString()).toBe('g_auto:cat_-100');
  });
});
