import {FlagQualifier} from "../../../src/MediaEditing/qualifiers/flag/FlagQualifier";
import {Action} from "../../../src/MediaEditing/internal/Action";

describe('Tests for Flag', () => {
  it('Creates a Flag', () => {
    const flag = new FlagQualifier("single_flag");
    expect(flag.toString()).toBe('fl_single_flag');
  });

  it ('Creates an action with multiple flags', () => {
    const str = new Action().addFlag('foo').addFlag('bar').toString();

    expect(str).toEqual('fl_bar,fl_foo');
  });
});
