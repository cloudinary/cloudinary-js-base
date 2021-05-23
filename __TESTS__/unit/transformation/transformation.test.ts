import {Transformation} from "../../../src/MediaEditing/transformation/Transformation";
import {scale} from "../../../src/MediaEditing/actions/resize";

describe('Tests for ImageTransformation', () => {
  let tx: Transformation = null;
  beforeEach(() => {
    tx = new Transformation();
  });

  it('Instantiates a ImageTransformation', () => {
    expect(tx).toBeDefined();
  });

  it('Accepts a raw transformation', () => {
    tx.addTransformation('w_100/w_200/w_300');
    expect(tx.toString()).toContain('w_100/w_200/w_300');
  });

  it('Accepts a transforamtion instance to addTransformation', () => {
    const tx1 = new Transformation().resize(scale().width(100));
    const tx2 = new Transformation().resize(scale().width(500));

    tx2.addTransformation(tx1);
    tx2.resize(scale().width(200));
    expect(tx2.toString()).toContain('c_scale,w_500/c_scale,w_100/c_scale,w_200');
  });

  it('Throws when passing a slash to an action', () => {
    expect(() => {
      tx.addAction('w_100/w_200/w_300');
    }).toThrow();
  });
});
