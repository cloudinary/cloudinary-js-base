import {BlendMode} from "../../../src/qualifiers/blendMode";
import {Overlay} from "../../../src/actions/overlay";
import {Source} from "../../../src/qualifiers/source";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import {sampleFacePosition} from "../../TestUtils/transformations/sampleFacePosition";
import {sampleTxResizePad} from "../../TestUtils/transformations/sampleTxResizePad";
import {createNewVideo} from "../../TestUtils/createCloudinaryVideo";
import {sampleTextStyle} from "../../TestUtils/transformations/sampleTextStyle";
import {Format, png} from "../../../src/qualifiers/format";
import {Underlay} from "../../../src/actions/underlay";
import {Timeline} from "../../../src/qualifiers/timeline";
import {base64Encode} from "../../../src/internal/utils/base64Encode";
import {TextStyle} from "../../../src/qualifiers/textStyle";

describe('Tests for overlay actions', () => {
  it('Tests Image on Image with publicID encoding', () => {
    const asset = createNewImage();
    asset.overlay(
      Overlay.source(Source.image("path/to/sample")
        .format(Format.png())
      )
    );

    expect(asset.toString()).toBe('l_path:to:sample.png/fl_layer_apply');
  });

  it('Tests Image on Image with format', () => {
    const asset = createNewImage();
    asset.overlay(
      Overlay.source(Source.image("sample")
        .format(Format.png())
      )
    );

    expect(asset.toString()).toBe('l_sample.png/fl_layer_apply');
  });

  it('Tests Image on Image with BlendMode and Position', () => {
    const asset = createNewImage();

    asset.overlay(Overlay.source(Source.image("sample"))
      .position(sampleFacePosition())
      .blendMode(BlendMode.screen())
    );

    expect(asset.toString()).toBe('l_sample/e_screen,fl_layer_apply,g_face');
  });

  it('Tests Image on Image with Transformation', () => {
    const asset = createNewImage();

    asset.overlay(
      Overlay.source(Source.image("sample")
        .transformation(sampleTxResizePad())
      )
    );

    expect(asset.toString()).toBe('l_sample/c_pad,w_100/fl_layer_apply');
  });

  it('Tests Video on Video with Transformation', () => {
    const asset = createNewVideo();

    asset.overlay(
      Overlay.source(Source.video("sample")
        .transformation(sampleTxResizePad())
      )
    );

    expect(asset.toString()).toBe('l_video:sample/c_pad,w_100/fl_layer_apply');
  });

  it('Tests text on image', () => {
    const asset = createNewImage();
    const textStyle = sampleTextStyle();

    asset.overlay(Overlay.source(
      Source.text('Testing', textStyle)
        .backgroundColor('red')
        .textColor('blue')
    ));

    expect(asset.toString()).toBe(`b_red,co_blue,l_text:${textStyle.toString()}:Testing/fl_layer_apply`);
  });

  it('Tests text on image using a variable', () => {
    const asset = createNewImage();
    const textStyle = '$My_Variable';

    asset.overlay(Overlay.source(
      Source.text('Testing', textStyle)
        .backgroundColor('red')
        .textColor('blue')
    ));

    expect(asset.toString()).toBe(`b_red,co_blue,l_text:${textStyle.toString()}:Testing/fl_layer_apply`);
  });

  it('Tests text on image with RGB backgroundColor', () => {
    const asset = createNewImage();

    asset.overlay(Overlay.source(
      Source.text('Testing', new TextStyle('arial', 15))
        .backgroundColor('#FEB61FC2')
        .textColor('blue')
    ));

    expect(asset.toString()).toBe(`b_rgb:FEB61FC2,co_blue,l_text:arial_15:Testing/fl_layer_apply`);
  });

  it('Tests nested subtitles on image', () => {
    const asset = createNewImage();
    const textStyle = sampleTextStyle();

    asset.overlay(Overlay.source(
      Source.subtitles('path/to/subs.srt').textStyle(textStyle)
    ));

    expect(asset.toString()).toBe(`l_subtitles:${textStyle.toString()}:path:to:subs.srt/fl_layer_apply`);
  });

  it('Tests subtitle on without style', () => {
    const asset = createNewImage();

    asset.overlay(Overlay.source(
      Source.subtitles('subs.srt')
    ));

    expect(asset.toString()).toBe(`l_subtitles:subs.srt/fl_layer_apply`);
  });

  it('Tests subtitle on image', () => {
    const asset = createNewImage();
    const textStyle = sampleTextStyle();

    asset.overlay(Overlay.source(
      Source.subtitles('subs.srt')
        .textStyle(textStyle)
    ));

    expect(asset.toString()).toBe(`l_subtitles:${textStyle.toString()}:subs.srt/fl_layer_apply`);
  });

  it('Tests an overlay with a complete example', () => {
    const asset = createNewImage();

    asset.overlay(Overlay.source(Source.image("sample").transformation(sampleTxResizePad()))
      .position(sampleFacePosition())
      .blendMode(BlendMode.screen())
    );

    expect(asset.toString()).toBe('l_sample/c_pad,w_100/e_screen,fl_layer_apply,g_face');
  });

  it('Tests an image underlay with a complete example', () => {
    const asset = createNewImage();

    asset.underlay(Underlay.source(Source.image("sample").transformation(sampleTxResizePad()))
      .position(sampleFacePosition())
      .blendMode(BlendMode.screen())
    );

    expect(asset.toString()).toBe('u_sample/c_pad,w_100/e_screen,fl_layer_apply,g_face');
  });

  it('Tests a video(main asset) with an image underlay', () => {
    const asset = createNewVideo();

    asset.underlay(Underlay.source(Source.image("sample").transformation(sampleTxResizePad()))
      .position(sampleFacePosition())
      .blendMode(BlendMode.screen())
    );

    // ensure toURL contains video/upload to confirm it's a video
    expect(asset.toURL()).toContain('video/upload/u_sample/c_pad,w_100/e_screen,fl_layer_apply,g_face');
  });

  it('Video on Video with timeline', () => {
    const asset = createNewVideo();

    asset.overlay(Overlay.source(Source.video("sample").transformation(sampleTxResizePad()))
      .timeline(Timeline.position().startOffset(10).duration(20))
      .position(sampleFacePosition())
    );

    expect(asset.toString()).toBe('l_video:sample/c_pad,w_100/du_20,fl_layer_apply,g_face,so_10.0');
  });

  it('Tests a fetchSource without format', () => {
    const asset = createNewVideo();
    const REMOTE_URL = "https://res.cloudinary.com/demo/image/upload/ci";
    const BASE64_URL = base64Encode(REMOTE_URL);

    asset.overlay(
      Overlay.source(
        Source.fetch(REMOTE_URL)
          .transformation(sampleTxResizePad())
      )
        .position(sampleFacePosition())
    );

    expect(asset.toString()).toContain(`l_fetch:${BASE64_URL}/${sampleTxResizePad().toString()}`);
  });

  it('Tests a fetchSource with format', () => {
    const asset = createNewImage('sample');
    const REMOTE_URL = "https://res.cloudinary.com/demo/image/upload/ci";

    asset.overlay(
      Overlay.source(
        Source.fetch(REMOTE_URL)
          .transformation(sampleTxResizePad())
          .format(png())
      )
    );

    // This is a fully functional URL that should work in the browser.
    // Explicitly check the resulting base64 string
    expect(asset.toString()).toContain(`l_fetch:aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvY2k=.png/${sampleTxResizePad().toString()}`);
  });

  it("should not serialize a text source with exclamation mark", () => {
    const asset = createNewImage('sample');
    const text = '!';
    const textSource = Source.text(text, 'arial_15');
    asset.overlay(Overlay.source(textSource));

    expect(asset.toURL()).toContain("l_text:arial_15:!/fl_layer_apply");
  });

  it("should serialize a fetch source", () => {
    const asset = createNewVideo();
    const REMOTE_URL = 'http://res.cloudinary.com/demo/sample.jpg';
    const expected = 'l_fetch:aHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL3NhbXBsZS5qcGc=/fl_layer_apply';
    const actual = asset.overlay(Overlay.source(Source.fetch(REMOTE_URL))).toString();

    expect(actual).toBe(expected);
  });

  it("should serialize a unicode url of fetch source", () => {
    const asset = createNewVideo();
    const REMOTE_URL = "https://upload.wikimedia.org/wikipedia/commons/2/2b/고창갯벌.jpg";
    const expected = "l_fetch:aHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8yLzJiLyVFQSVCMyVBMCVFQyVCMCVCRCVFQSVCMCVBRiVFQiVCMiU4Qy5qcGc=/fl_layer_apply";
    const actual = asset.overlay(Overlay.source(Source.fetch(REMOTE_URL))).toString();

    expect(actual).toBe(expected);
  });

  it("should support string interpolation", () => {
    const asset = createNewImage();
    const text = "$(start)hello";
    const textSource = Source.text(text, 'arial_15');
    asset.overlay(Overlay.source(textSource));

    expect(asset.toString()).toContain("l_text:arial_15:$(start)hello/fl_layer_apply");
  });

  it("should throw an exception if fontFamily or fontSize are not provided", () => {
    expect(() => new TextStyle(null, 17)).toThrow();
    expect(() => new TextStyle('arial', null)).toThrow();
  });
});
