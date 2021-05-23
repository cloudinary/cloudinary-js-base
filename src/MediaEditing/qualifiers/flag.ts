/**
 * @description Defines flags that you can use to alter the default transformation behavior.
 * @namespace Flag
 * @memberOf Qualifiers
 */

import {FlagQualifier} from "./flag/FlagQualifier";


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Used when delivering a video file as an image format that supports animation, such as animated WebP.
 * Plays all frames rather than just delivering the first one as a static image.
 * Use this flag in addition to the flag or parameter controlling the delivery format,
 * for example f_auto or fl_awebp.

 * Note: When delivering a video in GIF format, it is delivered as an animated GIF by default and this flag is not
 * necessary. To deliver a single frame of a video in GIF format, use the page parameter.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function animated(): FlagQualifier {
  return new FlagQualifier('animated');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description When converting animated images to WebP format, generate an animated WebP from all the frames in the
 * original
 * animated file instead of only from the first still frame.
 *
 * Note that animated WebPs are not supported in all browsers and versions.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function animatedWebP(): FlagQualifier {
  return new FlagQualifier('awebp');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description When used together with automatic quality (q_auto):
 * allow switching to PNG8 encoding if the quality algorithm decides that it's more efficient.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function anyFormat(): FlagQualifier {
  return new FlagQualifier('any_format');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description When converting animated images to PNG format, generates an animated PNG from all the frames in the
 * original
 * animated file instead of only from the first still frame.
 *
 * Note that animated PNGs are not supported in all browsers and versions.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function animatedPng(): FlagQualifier {
  return new FlagQualifier('apng');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Trims pixels according to a clipping path included in the original image
 * (e.g., manually created using PhotoShop).
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function clip(): FlagQualifier {
  return new FlagQualifier('clip');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Trims pixels according to a clipping path included in the original image (e.g., manually created
 * using PhotoShop)
 * using an evenodd clipping rule.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function clipEvenOdd(): FlagQualifier {
  return new FlagQualifier('clip_evenodd');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Instructs Cloudinary to clear all image meta-data (IPTC, Exif and XMP) while applying an incoming
 * transformation.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function forceStrip(): FlagQualifier {
  return new FlagQualifier('force_strip');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Allows custom flag
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function custom(value: string): FlagQualifier {
  return new FlagQualifier(value);
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Adds ICC color space metadata to the image, even when the original image doesn't contain any ICC data.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function forceIcc(): FlagQualifier {
  return new FlagQualifier('force_icc');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Delivers the image as an attachment.
 * @param {string} filename The attachment's filename
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function attachment(filename?: string): FlagQualifier {
  return new FlagQualifier('attachment', filename);
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Returns metadata of the input asset and of the transformed output asset in JSON instead of the
 * transformed image.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function getInfo(): FlagQualifier {
  return new FlagQualifier('getinfo');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Deliver an HLS adaptive bitrate streaming file as HLS v3 instead of the default version (HLS v4).
 * Delivering in this format requires a private CDN configuration.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function hlsv3(): FlagQualifier {
  return new FlagQualifier('hlsv3');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Sets the cache-control to immutable for the asset.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function immutableCache(): FlagQualifier {
  return new FlagQualifier('immutable_cache');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description * Allows specifying only either width or height so the value of the second axis remains as is, and is not
 * recalculated to maintain the aspect ratio of the original image.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function ignoreInitialAspectRatio(): FlagQualifier {
  return new FlagQualifier('ignore_aspect_ratio');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Keeps the copyright related fields when stripping meta-data.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function keepAttribution(): FlagQualifier {
  return new FlagQualifier('keep_attribution');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * Keep the Display Aspect Ratio metadata of the uploaded video (if it’s different from the current video
 * dimensions).
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function keepDar(): FlagQualifier {
  return new FlagQualifier('keep_dar');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Keeps all meta-data.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function keepIptc(): FlagQualifier {
  return new FlagQualifier('keep_iptc');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Applies all chained transformations, until a transformation component that includes this flag, on the last added
 * overlay or underlay instead of applying on the containing image.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function layerApply(): FlagQualifier {
  return new FlagQualifier('layer_apply');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Automatically use lossy compression when delivering animated GIF files.
 *
 * This flag can also be used as a conditional flag for delivering PNG files: it tells Cloudinary to deliver the
 * image in PNG format (as requested) unless there is no transparency channel - in which case deliver in JPEG
 * format.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function lossy(): FlagQualifier {
  return new FlagQualifier('lossy');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Convert the audio channel to mono
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function mono(): FlagQualifier {
  return new FlagQualifier('mono');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Used internally by Position within an Overlay, this flag will tile the overlay across your image.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/transformation_reference#fl_no_overflow | Overflow in overlays}
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function noOverflow(): FlagQualifier {
  return new FlagQualifier('no_overflow');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Don't stream a video that is currently being generated on the fly. Wait until the video is fully generated.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function noStream(): FlagQualifier {
  return new FlagQualifier('no_stream');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Generate PNG images in the png24 format.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function png24(): FlagQualifier {
  return new FlagQualifier('png24');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Generate PNG images in the png32 format.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function png32(): FlagQualifier {
  return new FlagQualifier('png32');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Generate PNG images in the PNG8 format.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function png8(): FlagQualifier {
  return new FlagQualifier('png8');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description When used with automatic fetch_format (f_auto): ensures that images with a transparency channel will be
 * delivered in PNG format.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function preserveTransparency(): FlagQualifier {
  return new FlagQualifier('preserve_transparency');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Generates a JPG image using the progressive (interlaced) JPG format.
 *
 * This format allows the browser to quickly show a low-quality rendering of the image until the full-quality
 * image is loaded.
 *
 * @param {string} mode The mode to determine a specific progressive outcome as follows:
 * * semi - A smart optimization of the decoding time, compression level and progressive rendering
 *          (less iterations). This is the default mode when using q_auto.
 * * steep - Delivers a preview very quickly, and in a single later phase improves the image to
 *           the required resolution.
 * * none  - Use this to deliver a non-progressive image. This is the default mode when setting
 *           a specific value for quality.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function progressive(mode?: string): FlagQualifier {
  return new FlagQualifier('progressive', mode);
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the overlaid region
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function regionRelative(): FlagQualifier {
  return new FlagQualifier('region_relative');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Reduces the image to one flat pixelated layer (as opposed to the default vector based graphic) in
 * order to enable
 * PDF resizing and overlay manipulations.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function rasterize(): FlagQualifier {
  return new FlagQualifier('rasterize');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the containing image instead of the added layer.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function relative(): FlagQualifier {
  return new FlagQualifier('relative');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Instructs Cloudinary to run a sanitizer on the image (relevant only for the SVG format).
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function sanitize(): FlagQualifier {
  return new FlagQualifier('sanitize');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Splices the video stipulated as an overlay on to the end of the container video instead of adding it as an
 * overlay.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function splice(): FlagQualifier {
  return new FlagQualifier('splice');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Instructs Cloudinary to clear all ICC color profile data included with the image.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function stripProfile(): FlagQualifier {
  return new FlagQualifier('strip_profile');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description If the requested video transformation has already been generated, this flag works identically to
 * Flag::attachment.
 *
 *  However, if the video transformation is being requested for the first time, this flag causes the video download
 * to begin immediately, streaming it as a fragmented video file.
 *
 * In contrast, if the regular fl_attachment flag is used when a user requests a new video transformation,
 * the download will begin only after the complete transformed video has been generated.
 *
 * Most standard video players successfully play fragmented video files without issue.
 *
 * @param {string} filename The attachment's filename
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function streamingAttachment(filename: string): FlagQualifier {
  return new FlagQualifier('streaming_attachment', filename);
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Generates TIFF images using LZW compression and in the TIFF8 format.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function tiff8Lzw(): FlagQualifier {
  return new FlagQualifier('tiff8_lzw');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Used internally by Position within an Overlay, this flag will tile the overlay across your image.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#tiling_overlays | Tiling overlay}
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function tiled(): FlagQualifier {
  return new FlagQualifier('tiled');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Truncate (trim) a video file based on the start time defined in the metadata (relevant only where the metadata
 * includes a directive to play only a section of the video).
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function truncateTS(): FlagQualifier {
  return new FlagQualifier('truncate_ts');
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description Create a waveform image (in the format specified by the file extension) from the audio or video file.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function waveform(): FlagQualifier {
  return new FlagQualifier('waveform');
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.Flag
 * @description A qualifier that ensures that an alpha channel is not applied to a TIFF image if it is a mask channel.
 * @return {Qualifiers.Flag.FlagQualifier}
 */
function ignoreMaskChannels(): FlagQualifier {
  return new FlagQualifier('ignore_mask_channels');
}


const Flag = {
  animated, anyFormat, animatedPng, animatedWebP,
  clipEvenOdd, lossy, preserveTransparency, png8, png24, png32, progressive, rasterize,
  sanitize, stripProfile, tiff8Lzw, attachment, forceIcc, forceStrip, getInfo, immutableCache,
  keepAttribution, keepIptc, custom, streamingAttachment, hlsv3, keepDar, noStream, mono,
  layerApply, relative, regionRelative, splice, truncateTS, waveform, ignoreInitialAspectRatio, clip,
  tiled, noOverflow, ignoreMaskChannels
};

export {
  Flag, animated, anyFormat, animatedPng, animatedWebP,
  clipEvenOdd, lossy, preserveTransparency, png8, png24, png32, progressive, rasterize,
  sanitize, stripProfile, tiff8Lzw, attachment, forceIcc, forceStrip, getInfo, immutableCache,
  keepAttribution, keepIptc, custom, streamingAttachment, hlsv3, keepDar, noStream, mono,
  layerApply, relative, regionRelative, splice, truncateTS, waveform, ignoreInitialAspectRatio, clip,
  tiled, noOverflow, ignoreMaskChannels
};


