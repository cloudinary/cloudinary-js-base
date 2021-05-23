import {Format} from "../../../../src/MediaEditing/qualifiers/format";

describe('Test imported qualifiers', () => {
  it ('Tests audio formats', () => {

    const {audioAac, audioAiff, audioAmr, audioFlac, audioM4a, audioMp3, audioOgg, audioOpus, audioWav} = Format;
    expect(audioAac().toString()).toBe('aac');
    expect(audioAiff().toString()).toBe('aiff');
    expect(audioAmr().toString()).toBe('amr');
    expect(audioFlac().toString()).toBe('flac');
    expect(audioM4a().toString()).toBe('m4a');
    expect(audioMp3().toString()).toBe('mp3');
    expect(audioOgg().toString()).toBe('ogg');
    expect(audioOpus().toString()).toBe('opus');
    expect(audioWav().toString()).toBe('wav');
  });

  it('Test Video formats', () => {
    const {video3g2, video3gp, videoAvi, videoFlv, videoM2ts, videoM3u8, videoMkv, videoMov, videoMp4, videoMpd,
      videoMpeg, videoMts, videoMxf, videoOgv, videoTs, videoWebm, videoWmv} = Format;

    expect(video3g2().toString()).toBe('3g2');
    expect(video3gp().toString()).toBe('3gp');
    expect(videoAvi().toString()).toBe('avi');
    expect(videoFlv().toString()).toBe('flv');
    expect(videoM2ts().toString()).toBe('m2ts');
    expect(videoM3u8().toString()).toBe('m3u8');
    expect(videoMkv().toString()).toBe('mkv');
    expect(videoMov().toString()).toBe('mov');
    expect(videoMp4().toString()).toBe('mp4');
    expect(videoMpd().toString()).toBe('mpd');
    expect(videoMpeg().toString()).toBe('mpeg');
    expect(videoMts().toString()).toBe('mts');
    expect(videoMxf().toString()).toBe('mxf');
    expect(videoOgv().toString()).toBe('ogv');
    expect(videoTs().toString()).toBe('ts');
    expect(videoWebm().toString()).toBe('webm');
    expect(videoWmv().toString()).toBe('wmv');
  });


  it('Test image formats', () => {
    const {jp2, ai, auto, bmp, eps, flif, gif, heic, ico, jpc, jpg, pdf, png, psd, svg, tiff, wdp, webp, arw,
      avif, cr2, djvu, eps3, ept, fxb, gltf, hdp, heif, indd, jpe, jpeg, jxr, ps, spd, tga, tif, usdz} = Format;
    expect(jp2().toString()).toBe('jp2');
    expect(ai().toString()).toBe('ai');
    expect(auto().toString()).toBe('auto');
    expect(bmp().toString()).toBe('bmp');
    expect(eps().toString()).toBe('eps');
    expect(flif().toString()).toBe('flif');
    expect(gif().toString()).toBe('gif');
    expect(heic().toString()).toBe('heic');
    expect(ico().toString()).toBe('ico');
    expect(jpc().toString()).toBe('jpc');
    expect(jpg().toString()).toBe('jpg');
    expect(pdf().toString()).toBe('pdf');
    expect(png().toString()).toBe('png');
    expect(psd().toString()).toBe('psd');
    expect(svg().toString()).toBe('svg');
    expect(tiff().toString()).toBe('tiff');
    expect(wdp().toString()).toBe('wdp');
    expect(webp().toString()).toBe('webp');
    expect(arw().toString()).toBe('arw');
    expect(avif().toString()).toBe('avif');
    expect(cr2().toString()).toBe('cr2');
    expect(djvu().toString()).toBe('djvu');
    expect(eps3().toString()).toBe('eps3');
    expect(ept().toString()).toBe('ept');
    expect(fxb().toString()).toBe('fxb');
    expect(gltf().toString()).toBe('gltf');
    expect(hdp().toString()).toBe('hdp');
    expect(heif().toString()).toBe('heif');
    expect(indd().toString()).toBe('indd');
    expect(jpe().toString()).toBe('jpe');
    expect(jpeg().toString()).toBe('jpeg');
    expect(jxr().toString()).toBe('jxr');
    expect(ps().toString()).toBe('ps');
    expect(spd().toString()).toBe('spd');
    expect(tga().toString()).toBe('tga');
    expect(tif().toString()).toBe('tif');
    expect(usdz().toString()).toBe('usdz');
  });
});

