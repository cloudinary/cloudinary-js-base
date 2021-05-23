import * as Resize from "../../../src/MediaEditing/actions/resize";
import {Flag} from "../../../src/MediaEditing/qualifiers/flag";
import {createNewVideo} from "../../TestUtils/createCloudinaryVideo";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";




describe('Tests for Transformation Action -- Flag', () => {
  it('Creates a cloudinaryURL with image flags', () => {
    const url = createNewImage('sample')
      .addFlag(Flag.anyFormat())
      .addFlag(Flag.animatedPng())
      .addFlag(Flag.animatedWebP())
      .addFlag(Flag.clipEvenOdd())
      .addFlag(Flag.lossy())
      .addFlag(Flag.clip())
      .addFlag(Flag.preserveTransparency())
      .addFlag(Flag.png8())
      .addFlag(Flag.png24())
      .addFlag(Flag.png32())
      .addFlag(Flag.progressive('semi'))
      .addFlag(Flag.rasterize())
      .addFlag(Flag.sanitize())
      .addFlag(Flag.stripProfile())
      .addFlag(Flag.tiff8Lzw())
      .addFlag(Flag.attachment('pretty_flower'))
      .addFlag(Flag.getInfo())
      .addFlag(Flag.immutableCache())
      .addFlag(Flag.keepAttribution())
      .addFlag(Flag.keepIptc())
      .addFlag(Flag.custom('myFlag'))
      .addFlag(Flag.layerApply())
      .addFlag(Flag.ignoreMaskChannels())



      .setPublicID('sample')
      .toURL();

    const expectedToContain = [
      'fl_any_format',
      'fl_apng',
      'fl_awebp',
      'fl_clip_evenodd',
      'fl_lossy',
      'fl_clip',
      'fl_preserve_transparency',
      'fl_png8',
      'fl_png24',
      'fl_png32',
      'fl_progressive:semi',
      'fl_rasterize',
      'fl_sanitize',
      'fl_strip_profile',
      'fl_tiff8_lzw',
      'fl_attachment:pretty_flower',
      'fl_getinfo',
      'fl_immutable_cache',
      'fl_keep_attribution',
      'fl_keep_iptc',
      'fl_myFlag',
      'fl_layer_apply',
      'fl_ignore_mask_channels'
    ].join('/');

    expect(url).toBe(`https://res.cloudinary.com/demo/image/upload/${expectedToContain}/sample`);
  });

  it('Creates a cloudinaryURL with video flags', () => {
    const url = createNewVideo('sample')
      .addFlag(Flag.hlsv3())
      .addFlag(Flag.keepDar())
      .addFlag(Flag.noStream())
      .addFlag(Flag.mono())
      .addFlag(Flag.splice())
      .addFlag(Flag.waveform())
      .addFlag(Flag.streamingAttachment('file_name'))

      .setPublicID('sample')
      .toURL();

    const expectedToContain = [
      'fl_hlsv3',
      'fl_keep_dar',
      'fl_no_stream',
      'fl_mono',
      'fl_splice',
      'fl_waveform',
      'fl_streaming_attachment:file_name'
    ].join('/');

    expect(url).toBe(`https://res.cloudinary.com/demo/video/upload/${expectedToContain}/sample`);
  });

  it('Creates a cloudinaryURL with multiple flags', () => {
    const url = createNewImage('sample')
      .resize(
        Resize.fill(400)
          .aspectRatio(1.0)
          .addFlag(Flag.keepIptc())
          .addFlag(Flag.keepAttribution())
      )
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/ar_1.0,c_fill,fl_keep_attribution,fl_keep_iptc,w_400/sample');
  });
});
