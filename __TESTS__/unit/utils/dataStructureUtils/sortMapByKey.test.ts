import {mapToSortedArray} from "../../../../src/MediaEditing/internal/utils/dataStructureUtils";

describe('Tests for sortMapByKey', () => {
  it('sorts a map', () => {
    const map = new Map();
    map.set('c', 'c');
    map.set('a', 'a');
    map.set('b', 'b');

    expect(mapToSortedArray(map, []).join(',')).toBe('a,b,c');
  });
});
