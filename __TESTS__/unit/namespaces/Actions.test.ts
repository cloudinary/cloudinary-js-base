import {RoundCorners} from "../../../src/MediaEditing/actions/roundCorners";
import {Actions} from "../../../src/MediaEditing/actions";
import {Resize} from "../../../src/MediaEditing/actions/resize";
import {Border} from "../../../src/MediaEditing/actions/border";

describe('Tests for the Actions namespace', () => {
  it('Test that Actions exports different actions correctly', () => {
    expect(Actions.Border).toBe(Border);
    expect(Actions.Resize).toBe(Resize);
    expect(Actions.RoundCorners).toBe(RoundCorners);
  });
});
