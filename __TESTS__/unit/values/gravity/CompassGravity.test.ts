import {Compass} from "../../../../src/MediaEditing/qualifiers/compass";
import {Gravity} from "../../../../src/MediaEditing/qualifiers/gravity";

describe('Tests for Compass Gravity', () => {
  it('Expects Gravity to return g_{direction}', () => {
    expect(Compass.north().toString()).toBe('north');
    expect(Gravity.compass(Compass.north()).toString()).toBe('g_north');
    expect(Gravity.compass(Compass.center()).toString()).toBe('g_center');
    expect(Gravity.compass(Compass.east()).toString()).toBe('g_east');
    expect(Gravity.compass(Compass.west()).toString()).toBe('g_west');
    expect(Gravity.compass(Compass.north()).toString()).toBe('g_north');
    expect(Gravity.compass(Compass.south()).toString()).toBe('g_south');
    expect(Gravity.compass(Compass.northWest()).toString()).toBe('g_north_west');
    expect(Gravity.compass(Compass.southWest()).toString()).toBe('g_south_west');
    expect(Gravity.compass(Compass.southEast()).toString()).toBe('g_south_east');
    expect(Gravity.compass(Compass.northEast()).toString()).toBe('g_north_east');
  });
});
