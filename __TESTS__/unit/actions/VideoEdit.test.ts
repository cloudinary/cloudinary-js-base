import {Transformation} from "../../../src/MediaEditing/transformation/Transformation";
import {Concatenate} from "../../../src/MediaEditing/qualifiers/concatenate";
import {Volume} from "../../../src/MediaEditing/qualifiers/volume";
import {createNewVideo} from "../../TestUtils/createCloudinaryVideo";
import {Transition} from "../../../src/MediaEditing/qualifiers/transition";
import {Effect} from "../../../src/MediaEditing/actions/effect";
import {VideoEdit} from "../../../src/MediaEditing/actions/videoEdit";


describe('Tests for Transformation Action -- VideoEdit', () => {
  it('Creates a cloudinaryURL with concatenate', () => {
    const url = createNewVideo('sample')
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog")
        )
      )
      .toString();

    // fl_splice,l_video:dog/{videoTransformation}/fl_layer_apply
    expect(url).toContain('fl_splice,l_video:dog/fl_layer_apply');
  });

  it('Creates a cloudinaryURL with concatenate prepend', () => {
    const url = createNewVideo('sample')
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog")
        )
          .prepend() // implicitly true
      )
      .toString();

    expect(url).toBe('fl_splice,l_video:dog/fl_layer_apply,so_0');
  });

  it('Creates a cloudinaryURL with concatenate with transition', () => {
    const src = Concatenate.imageSource("sample");
    src.transformation(new Transformation());
    src.getTransformation().effect(Effect.sepia());

    const url = createNewVideo('sample')
      .videoEdit(
        VideoEdit.concatenate(src)
          .transition(Transition.videoSource("transition1"))
          .duration(5)
      ).toString();

    expect(url).toBe('du_5,l_sample/e_sepia/e_transition,l_video:transition1/fl_layer_apply/fl_layer_apply');
  });

  it('Creates a cloudinaryURL with trim', () => {
    const url = createNewVideo('sample')
      .videoEdit(VideoEdit.trim()
        .startOffset(3)
        .endOffset(4)
        .duration(10))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/du_10,eo_4,so_3/sample');
  });

  it('Creates a cloudinaryURL with trim and percent duration', () => {
    const url = createNewVideo('sample')
      .videoEdit(VideoEdit.trim()
        .startOffset(3)
        .endOffset(4)
        .duration('10%'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/du_10p,eo_4,so_3/sample');
  });

  it('Creates a cloudinaryURL with trim %', () => {
    const url = createNewVideo('sample')
      .videoEdit(VideoEdit.trim()
        .startOffset('3%')
        .endOffset('4%')
        .duration('10%'))
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/du_10p,eo_4p,so_3p/sample');
  });

  it('Creates a cloudinaryURL with volume string', () => {
    const url = createNewVideo('sample')
      .videoEdit(VideoEdit.volume('5db'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/e_volume:5db/sample');
  });

  it('Creates a cloudinaryURL with volume number', () => {
    const url = createNewVideo('sample')
      .videoEdit(VideoEdit.volume(10))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/e_volume:10/sample');
  });

  it('Creates a cloudinaryURL with volume Volume.mute()', () => {
    const url = createNewVideo('sample')
      .videoEdit(VideoEdit.volume(Volume.mute()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/e_volume:mute/sample');
  });

  it('Creates a cloudinaryURL with volume Volume.byDecibels()', () => {
    const url = createNewVideo('sample')
      .videoEdit(VideoEdit.volume(Volume.byDecibels(5)))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/e_volume:5db/sample');
  });

  it('Creates a cloudinaryURL with volume Volume.byPercent()', () => {
    const url = createNewVideo('sample')
      .videoEdit(VideoEdit.volume(Volume.byPercent('10')))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/e_volume:10/sample');
  });

  it('Tests a preview transformation for a video', () => {
    const url = createNewVideo('sample')
      .videoEdit(
        VideoEdit.preview()
          .duration(5)
          .minimumSegmentDuration(1)
          .maximumSegments(10)
      ).toString();

    expect(url).toContain('e_preview:duration_5.0:max_seg_10:min_seg_dur_1.0');
  });
});
