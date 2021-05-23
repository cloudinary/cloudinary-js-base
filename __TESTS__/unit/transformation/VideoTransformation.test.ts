import {VideoTransformation} from "../../../src/MediaEditing/transformation/VideoTransformation";

describe('Tests for VideoTransformation', () => {
  let tVideo: VideoTransformation = null;
  beforeEach(() => {
    tVideo = new VideoTransformation();
  });

  it('Instantiates a VideoTransformation', () => {
    expect(tVideo).toBeDefined();
  });

  /**
   * If we add specific VideoTransformation functionality, We should test it here.
   */
});
