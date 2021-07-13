/**
 * @namespace Qualifiers
 */
import {AnimatedFormat} from "./qualifiers/animatedFormat";
import {ArtisticFilter} from "./qualifiers/artisticFilter";
import {AspectRatio} from "./qualifiers/aspectRatio";
import {AudioCodec} from "./qualifiers/audioCodec";
import {AudioFrequency} from "./qualifiers/audioFrequency";
import {Background} from "./qualifiers/background";
import {ChromaSubSampling} from "./qualifiers/chromaSubSampling";
import {Color} from "./qualifiers/color";
import {ColorSpace} from "./qualifiers/colorSpace";
import {Dither} from "./qualifiers/dither";
import {Dpr} from "./qualifiers/dpr";
import {Expression} from "./qualifiers/expression";
import {FontHinting} from "./qualifiers/fontHinting";
import {FontStyle} from "./qualifiers/fontStyle";
import {FontWeight} from "./qualifiers/fontWeight";
import {Format} from "./qualifiers/format";
import {GradientDirection} from "./qualifiers/gradientDirection";
import {Gravity} from "./qualifiers/gravity";
import {ImproveMode} from "./qualifiers/improveMode";
import {OutlineMode} from "./qualifiers/outlineMode";
import {Position} from "./qualifiers/position";
import {Quality} from "./qualifiers/quality";
import {Region} from "./qualifiers/region";
import {RotationMode} from "./qualifiers/rotationMode";
import {SimulateColorBlind} from "./qualifiers/simulateColorBlind";
import {Source} from "./qualifiers/source";
import {StreamingProfile} from "./qualifiers/streamingProfile";
import {TextAlignment} from "./qualifiers/textAlignment";
import {TextDecoration} from "./qualifiers/textDecoration";
import {GradientFade} from "./qualifiers/GradientFade";
import {Stroke} from "./qualifiers/textStroke";


const Qualifiers = {
  TextDecoration,
  TextAlignment,
  Stroke,
  StreamingProfile,
  SimulateColorBlind,
  RotationMode,
  Region,
  Quality,
  Position,
  OutlineMode,
  ImproveMode,
  GradientDirection,
  Format,
  FontWeight,
  FontStyle,
  FontHinting,
  Expression,
  Dither,
  ColorSpace,
  Color,
  Background,
  AudioFrequency,
  AudioCodec,
  AspectRatio,
  ArtisticFilter,
  AnimatedFormat,
  Gravity,
  ChromaSubSampling,
  Dpr,
  Sources: Source,
  GradientFade
};

export {Qualifiers};
