import {CloudinaryMedia} from "../../../src/MediaEditing/assets/CloudinaryMedia";
import {VideoEdit} from "../../../src/MediaEditing/actions/videoEdit";
import {Transcode} from "../../../src/MediaEditing/actions/transcode";
import {Underlay} from "../../../src/MediaEditing/actions/underlay";
import {Source} from "../../../src/MediaEditing/qualifiers/source";

describe('Tests for CloudinaryMedia', () => {
  let cloudinaryMedia: CloudinaryMedia = null;
  beforeEach(() => {
    cloudinaryMedia = new CloudinaryMedia('sample', {cloudName: 'demo'});
  });

  it('Contains videoEdit', () => {
    const url = cloudinaryMedia.videoEdit(VideoEdit.trim().duration(10)).toURL();
    expect(url).toContain('du_10');
  });

  it('Contains transcode', () => {
    const url = cloudinaryMedia.transcode(Transcode.fps(15)).toURL();
    expect(url).toContain('fps_15');
  });

  it('Contains Underlay', () => {
    const url = cloudinaryMedia.underlay(Underlay.source(Source.image('woman'))).toURL();
    expect(url).toContain('u_woman');
  });
});

