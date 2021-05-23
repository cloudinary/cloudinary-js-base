export type StreamingProfiles = string | "4k" | "full_hd" | "hd" | "sd" | "full_hd_wifi" | "full_hd_lean" | "hd_lean";

export type stringOrNumber = number | string;

export type CropMode =
  string
  | "scale"
  | "fit"
  | "limit"
  | "mfit"
  | "fill"
  | "lfill"
  | "pad"
  | "lpad"
  | "mpad"
  | "crop"
  | "thumb"
  | "imagga_crop"
  | "imagga_scale";
export type Gravity =
  string
  | "north_west"
  | "north"
  | "north_east"
  | "west"
  | "center"
  | "east"
  | "south_west"
  | "south"
  | "south_east"
  | "xy_center"
  | "face"
  | "face:center"
  | "face:auto"
  | "faces"
  | "faces:center"
  | "faces:auto"
  | "body"
  | "body:face"
  | "adv_face"
  | "adv_faces"
  | "adv_eyes"
  | "custom"
  | "custom:face"
  | "custom:faces"
  | "custom:adv_face"
  | "custom:adv_faces"
  | "auto"
  | "auto:adv_face"
  | "auto:adv_faces"
  | "auto:adv_eyes"
  | "auto:body"
  | "auto:face"
  | "auto:faces"
  | "auto:custom_no_override"
  | "auto:none"
  | "liquid"
  | "ocr_text";
export type Angle = stringOrNumber | Array<stringOrNumber> | "auto_right" | "auto_left" | "ignore" | "vflip" | "hflip";
export type ImageEffect =
  string
  | "hue"
  | "red"
  | "green"
  | "blue"
  | "negate"
  | "brightness"
  | "auto_brightness"
  | "brightness_hsb"
  | "sepia"
  | "grayscale"
  | "blackwhite"
  | "saturation"
  | "colorize"
  | "replace_color"
  | "simulate_colorblind"
  | "assist_colorblind"
  | "recolor"
  | "tint"
  | "contrast"
  | "auto_contrast"
  | "auto_color"
  | "vibrance"
  | "noise"
  | "ordered_dither"
  | "pixelate_faces"
  | "pixelate_region"
  | "pixelate"
  | "unsharp_mask"
  | "sharpen"
  | "blur_faces"
  | "blur_region"
  | "blur"
  | "tilt_shift"
  | "gradient_fade"
  | "vignette"
  | "anti_removal"
  | "overlay"
  | "mask"
  | "multiply"
  | "displace"
  | "shear"
  | "distort"
  | "trim"
  | "make_transparent"
  | "shadow"
  | "viesus_correct"
  | "fill_light"
  | "gamma"
  | "improve";

export type VideoEffect = string | "accelerate" | "reverse" | "boomerang" | "loop" | "make_transparent" | "transition";
export type AudioCodec = string | "none" | "aac" | "vorbis" | "mp3";
export type AudioFrequency =
  string
  | number
  | 8000
  | 11025
  | 16000
  | 22050
  | 32000
  | 37800
  | 44056
  | 44100
  | 47250
  | 48000
  | 88200
  | 96000
  | 176400
  | 192000;
/****************************** Flags *************************************/
export type ImageFlags =
  string
  | Array<string>
  | "any_format"
  | "attachment"
  | "apng"
  | "awebp"
  | "clip"
  | "clip_evenodd"
  | "cutter"
  | "force_strip"
  | "getinfo"
  | "ignore_aspect_ratio"
  | "immutable_cache"
  | "keep_attribution"
  | "keep_iptc"
  | "layer_apply"
  | "lossy"
  | "preserve_transparency"
  | "png8"
  | "png32"
  | "progressive"
  | "rasterize"
  | "region_relative"
  | "relative"
  | "replace_image"
  | "sanitize"
  | "strip_profile"
  | "text_no_trim"
  | "no_overflow"
  | "text_disallow_overflow"
  | "tiff8_lzw"
  | "tiled";
export type VideoFlags =
  string
  | Array<string>
  | "animated"
  | "awebp"
  | "attachment"
  | "streaming_attachment"
  | "hlsv3"
  | "keep_dar"
  | "splice"
  | "layer_apply"
  | "no_stream"
  | "mono"
  | "relative"
  | "truncate_ts"
  | "waveform";
export type ColorSpace = string | "srgb" | "no_cmyk" | "keep_cmyk";
export type DeliveryType =
  string
  | "upload"
  | "private"
  | "authenticated"
  | "fetch"
  | "multi"
  | "text"
  | "asset"
  | "list"
  | "facebook"
  | "twitter"
  | "twitter_name"
  | "instagram"
  | "gravatar"
  | "youtube"
  | "hulu"
  | "vimeo"
  | "animoto"
  | "worldstarhiphop"
  | "dailymotion";
/****************************** URL *************************************/
export type ResourceType = string | "image" | "raw" | "video";
export type ImageFormat =
  string
  | "gif"
  | "png"
  | "jpg"
  | "bmp"
  | "ico"
  | "pdf"
  | "tiff"
  | "eps"
  | "jpc"
  | "jp2"
  | "psd"
  | "webp"
  | "zip"
  | "svg"
  | "webm"
  | "wdp"
  | "hpx"
  | "djvu"
  | "ai"
  | "flif"
  | "bpg"
  | "miff"
  | "tga"
  | "heic"

export type VideoFormat =
  string
  | "auto"
  | "flv"
  | "m3u8"
  | "ts"
  | "mov"
  | "mkv"
  | "mp4"
  | "mpd"
  | "ogv"
  | "webm"


export interface V1ITransforamtionOptions {
  transformation?: V1ITransforamtionOptions;
  raw_transformation?: string;
  crop?: CropMode;
  width?: stringOrNumber;
  height?: stringOrNumber;
  size?: string;
  aspect_ratio?: stringOrNumber;
  gravity?: Gravity;
  x?: stringOrNumber;
  y?: stringOrNumber;
  zoom?: stringOrNumber;
  background?: string;
  angle?: Angle;
  radius?: stringOrNumber;
  overlay?: string | Record<string, any>;
  custom_function?: string | { function_type: string | "wasm" | "remote", source: string }
  variables?: Array<string | Record<string, any>>;
  if?: string;
  else?: string;
  end_if?: string;
  dpr?: stringOrNumber;
  quality?: stringOrNumber;
  delay?: stringOrNumber;
  underlay?: string | Object;
  color?: string;
  color_space?: ColorSpace;
  opacity?: stringOrNumber;
  border?: {
    width?: stringOrNumber;
    color?: string;
  } | string;
  default_image?: string;
  density?: stringOrNumber;
  format?: ImageFormat;
  fetch_format?: ImageFormat;
  effect?: string | Array<stringOrNumber> | ImageEffect;
  page?: stringOrNumber;
  flags?: ImageFlags | [] | string;
  audio_codec?: AudioCodec;
  audio_frequency?: AudioFrequency;
  video_codec?: string | Object;
  bit_rate?: stringOrNumber;
  fps?: string | Array<stringOrNumber>;
  keyframe_interval?: string;
  offset?: string,
  start_offset?: stringOrNumber;
  end_offset?: stringOrNumber;
  duration?: stringOrNumber;
  streaming_profile?: StreamingProfiles
  video_sampling?: stringOrNumber;
  cloud_name?: string;
  api_key?: string;
  api_secret?: string;
  private_cdn?: boolean;
  secure_distribution?: string;
  force_version?: boolean;
  ssl_detected?: boolean;
  secure?: boolean;
  cdn_subdomain?: boolean;
  secure_cdn_subdomain?: boolean;
  cname?: string;
  shorten?: boolean;
  sign_url?: boolean;
  long_url_signature?: boolean;
  use_root_path?: boolean;
  auth_token?: object;
  account_id?: string;
  provisioning_api_key?: string;
  provisioning_api_secret?: string;
  version?: string;
  url_suffix?: string;
  [futureKey: string]: any;
}
