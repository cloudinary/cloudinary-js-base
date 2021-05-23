import {ImageTransformation} from "../../../src/MediaEditing/transformation/ImageTransformation";


describe('Tests for ImageTransformation', () => {
  let tImage: ImageTransformation = null;
  beforeEach(() => {
    tImage = new ImageTransformation();
  });

  it('Instantiates a ImageTransformation', () => {
    expect(tImage).toBeDefined();
  });

  /**
   * If we add specific ImageTransformation functionality, We should test it here.
   */
});
