import {AnimatedFormat} from "../../../src/qualifiers/animatedFormat";
import {createNewVideo} from "../../TestUtils/createCloudinaryVideo";
import {AudioFrequency} from "../../../src/qualifiers/audioFrequency";
import {Transcode} from "../../../src/actions/transcode";
import {AudioCodec} from "../../../src/qualifiers/audioCodec";
import {StreamingProfile} from "../../../src/qualifiers/streamingProfile";
import {VideoCodec} from "../../../src/qualifiers/videoCodec";
import {VideoCodecLevel} from "../../../src/qualifiers/videoCodecLevel";
import {VideoCodecProfile} from "../../../src/qualifiers/videoCodecProfile";
import {scale} from "../../../src/actions/resize";

describe('Tests for Transformation Action -- Transcode', () => {
  it('Creates a cloudinaryURL with audiocodec', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode.audioCodec(AudioCodec.aac()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/ac_aac/sample');
  });

  it('Creates a cloudinaryURL with bitrate', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode.bitRate('500k'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/br_500k/sample');
  });

  it('Creates a cloudinaryURL with bitrate.constant', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .bitRate(500).constant())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/br_500:constant/sample');
  });

  it('Creates a cloudinaryURL with audioFrequency', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .audioFrequency(AudioFrequency.FREQ11025()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/af_11025/sample');
  });

  it('Creates a cloudinaryURL with fps', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .fps(20))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/fps_20/sample');
  });

  it('Creates a cloudinaryURL with fpsRange from', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .fpsRange(20))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/fps_20-/sample');
  });

  it('Creates a cloudinaryURL with fpsRange from-to', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .fpsRange(20, 20))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/fps_20-20/sample');
  });

  it('Creates a cloudinaryURL with keyframeInterval', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .keyframeInterval(0.4))
      .transcode(Transcode
        .keyframeInterval('0.8'))
      .transcode(Transcode
        .keyframeInterval(1))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/ki_0.4/ki_0.8/ki_1.0/sample');
  });

  it('Creates a cloudinaryURL with streamingProfile', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .streamingProfile(StreamingProfile.fullHd()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/sp_full_hd/sample');
  });

  it('Creates a cloudinaryURL with toAnimated', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .toAnimated(AnimatedFormat.gif()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/f_gif,fl_animated/sample');
  });

  it('Creates a cloudinaryURL with toAnimated webp', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .toAnimated(AnimatedFormat.webp()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/f_webp,fl_animated,fl_awebp/sample');
  });

  it('Creates a cloudinaryURL with toAnimated and delay', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .toAnimated('gif').delay(20))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/dl_20,f_gif,fl_animated/sample');
  });

  it('Creates a cloudinaryURL with toAnimated, delay, sampling', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .toAnimated(AnimatedFormat.gif()).delay(20).sampling('4s'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/dl_20,f_gif,fl_animated,vs_4s/sample');
  });

  it('Tests for simple videoCodec', () => {
    const url = createNewVideo('sample').transcode(
      Transcode.videoCodec(VideoCodec.vp9())
    ).toURL();
    expect(url).toContain('vc_vp9');
  });

  it('Tests for all codec types', () => {
    expect(VideoCodec.vp8().toString()).toEqual('vc_vp8');
    expect(VideoCodec.proRes().toString()).toEqual('vc_prores');
    expect(VideoCodec.theora().toString()).toEqual('vc_theora');
    expect(VideoCodec.auto().toString()).toEqual('vc_auto');
  });

  it('Tests for all codecLevels', () => {
    // @TODO - do we need to change 3 to 3.0 in the transformation?
    expect(VideoCodecLevel.vcl30()).toEqual(3);
    expect(VideoCodecLevel.vcl31()).toEqual(3.1);
    expect(VideoCodecLevel.vcl40()).toEqual(4);
    expect(VideoCodecLevel.vcl41()).toEqual(4.1);
    expect(VideoCodecLevel.vcl42()).toEqual(4.2);
    expect(VideoCodecLevel.vcl50()).toEqual(5);
    expect(VideoCodecLevel.vcl51()).toEqual(5.1);
    expect(VideoCodecLevel.vcl52()).toEqual(5.2);
  });

  it('Tests for adv videoCodec', () => {
    const url = createNewVideo('sample')
      .resize(scale().width(100))
      .transcode(
        Transcode.videoCodec(
          VideoCodec.h264()
            .profile(VideoCodecProfile.baseline())
            .level(VideoCodecLevel.vcl31())
        )
      ).toURL();
    expect(url).toContain('c_scale,w_100/vc_h264:baseline:3.1');
  });
});
