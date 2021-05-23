// eslint-disable @typescript-eslint/ban-ts-comment
import {V1ITransforamtionOptions} from "./types";
import {processLayer} from "./transformationProcessing/processLayer";
import {process_if} from "./transformationProcessing/processIf";
import {toArray} from "./utils/toArray";
import {processRadius} from "./transformationProcessing/processRadius";
import {isObject} from "./utils/isObject";
import {processCustomFunction} from "./transformationProcessing/processCustomFunction";
import {processCustomPreFunction} from "./transformationProcessing/processCustomPreFunction";
import {splitRange} from "./utils/splitRange";
import {v1NormalizeExpression} from "./utils/v1NormalizeExpression";
import {normRangeValues} from "./utils/norm_range_values";
import {processVideoParams} from "./transformationProcessing/processVideoParams";




/**
 * Things dropped
 * - responsive_width
 * - config().dpr
 * - SSL Detected
 * - Provisioning API
 * - Magical configuration auto-mapping (everything has to be explicit)
 * - Signatures
 * - Secure is default true
 * @param transformationOptions
 */
export function generateTransformationString(transformationOptions: V1ITransforamtionOptions): string {
  if (typeof transformationOptions === 'string') {
    return transformationOptions;
  }

  if (Array.isArray(transformationOptions)) {
    return transformationOptions
      // TODO we might need to clone the childTransformation
      .map((singleTransformation) => {
        return generateTransformationString(singleTransformation);
      }).filter((a) => a).join('/');
  }

  // let responsive_width = consumeOption(transformationOptions, "responsive_width", config().responsive_width);

  let width: string | number;
  let height: string | number;


  const size = transformationOptions.size;
  const hasLayer = transformationOptions.overlay || transformationOptions.underlay;
  const crop = transformationOptions.crop;
  const angle = toArray(transformationOptions.angle).join(".");
  const background = (transformationOptions.background || '').replace(/^#/, "rgb:");
  const color = (transformationOptions.color || '').replace(/^#/, "rgb:");
  const flags = (toArray(transformationOptions.flags || [])).join('.');
  const dpr = transformationOptions.dpr;

  const overlay = processLayer(transformationOptions.overlay);
  const radius = processRadius(transformationOptions.radius);
  const underlay = processLayer(transformationOptions.underlay);
  const ifValue = process_if(transformationOptions.if);
  const custom_function = processCustomFunction(transformationOptions.custom_function);
  const custom_pre_function = processCustomPreFunction(transformationOptions.custom_pre_function);

  // These will change down the line, heads up!
  let fps = transformationOptions.fps;
  let namedTransformations = [];
  let childTransformations = toArray(transformationOptions.transformation || []);
  let effect = transformationOptions.effect;

  // TODO, Do we need this?
  const no_html_sizes = hasLayer || angle || crop === "fit" || crop === "limit";


  if (size) {
    const [sizeWidth, sizeHeight] = size.split("x");
    width = sizeWidth;
    height = sizeHeight;
  } else {
    width = transformationOptions.width;
    height = transformationOptions.height;
  }


  if (width && (width.toString().indexOf("auto") === 0 || no_html_sizes || parseFloat(width.toString()) < 1)) {
    delete transformationOptions.width;
  }
  if (height && (no_html_sizes || parseFloat(height.toString()) < 1)) {
    delete transformationOptions.height;
  }


  // Is any child transformation an object?
  const isAnyChildAnObject = childTransformations.some((transformation: V1ITransforamtionOptions) => typeof transformation === 'object');

  // If array of objects, or array of strings?
  if (isAnyChildAnObject) {
    childTransformations = childTransformations.map((transformation: V1ITransforamtionOptions) => {
      if (isObject(transformation)) {
        // TODO We might need to clone here
        return generateTransformationString(transformation);
      } else {
        return generateTransformationString({transformation});
      }
    });

  } else {
    namedTransformations = childTransformations.join(".");
    childTransformations = []; // Reset child transfomrations
  }


  if (Array.isArray(effect)) {
    effect = effect.join(":");
  } else if (isObject(effect)) {
    effect = Object.entries(effect).map(
      ([key, value]) => `${key}:${value}`
    );
  }

  let border = transformationOptions.border;
  if (isObject(border)) {
    border = `${border.width != null ? border.width : 2}px_solid_${(border.color != null ? border.color : "black").replace(/^#/, 'rgb:')}`;
  } else {
    // @ts-ignore
    if (/^\d+$/.exec(border)) { // fallback to html border attributes
      transformationOptions.border = border;
      border = void 0;
    }
  }

  if (Array.isArray(fps)) {
    fps = fps.join('-');
  }

  const urlParams = {
    a: v1NormalizeExpression(angle),
    ar: v1NormalizeExpression(transformationOptions.aspect_ratio),
    b: background,
    bo: border,
    c: crop,
    co: color,
    dpr: v1NormalizeExpression(dpr),
    e: v1NormalizeExpression(effect),
    fl: flags,
    fn: custom_function || custom_pre_function,
    fps: fps,
    h: v1NormalizeExpression(height),
    ki: v1NormalizeExpression(transformationOptions.keyframe_interval),
    l: overlay,
    o: v1NormalizeExpression(transformationOptions.opacity),
    q: v1NormalizeExpression(transformationOptions.quality),
    r: radius,
    t: namedTransformations,
    u: underlay,
    w: v1NormalizeExpression(width),
    x: v1NormalizeExpression(transformationOptions.x),
    y: v1NormalizeExpression(transformationOptions.y),
    z: v1NormalizeExpression(transformationOptions.zoom),
    ac: transformationOptions.audio_codec,
    af: transformationOptions.audio_frequency,
    br: transformationOptions.bit_rate,
    cs: transformationOptions.color_space,
    d: transformationOptions.default_image,
    dl: transformationOptions.delay,
    dn: transformationOptions.density,
    du: normRangeValues(transformationOptions.duration),
    eo: normRangeValues(splitRange(transformationOptions.offset)[1]),
    f: transformationOptions.fetch_format,
    g: transformationOptions.gravity,
    pg: transformationOptions.page,
    p: transformationOptions.prefix,
    so: normRangeValues(splitRange(transformationOptions.offset)[0]),
    sp: transformationOptions.streaming_profile,
    vc: processVideoParams(transformationOptions.video_codec),
    vs: transformationOptions.video_sampling
  };


  // We can accept variables in here transformationOptions, or in here transformationOptions.variables
  const variables = Object.entries(transformationOptions)
    .filter(([key, value]) => key.startsWith('$'))
    .map(([key, value]) => {
      // delete transformationOptions[key]; // Delete the variables, so we don't add them twice
      return `${key}_${v1NormalizeExpression(value)}`;
    }).sort().concat(
      // @ts-ignore
      (transformationOptions.variables || []).map(([name, value]) => `${name}_${v1NormalizeExpression(value)}`)
    ).join(',');


  // Clean up!
  const urlImageTransfomrations = Object.entries(urlParams)
    .filter(([key, value]) => {
      if (typeof value === 'undefined' || value === null) {
        return false;
      }
      if (typeof value === 'string' && value.length === 0) {
        return false;
      }

      if (Array.isArray(value) && value.length === 0) {
        return false
      }

      return true;
    })
    .map(([key, value]) => `${key}_${value}`)
    .sort()
    .join(',');

  const finalTransformationString = [
    ifValue,
    variables,
    urlImageTransfomrations,
    transformationOptions.raw_transformation
  ].filter((a) => a).join(",");

  // TODO why can this be empty?
  if (finalTransformationString) {
    childTransformations.push(finalTransformationString);
  }

  // console.log(childTransformations);
  return childTransformations.join("/");
}

