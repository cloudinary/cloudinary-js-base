import {ImageSource} from "../../src/qualifiers/source/sourceTypes/ImageSource";
import {VideoSource} from "../../src/qualifiers/source/sourceTypes/VideoSource";
import {Action} from "../../src/internal/Action";

type IOverlayQualifiers = {
  source: ImageSource | VideoSource,
  blendMode?: 'screen' | 'multiply' | 'overlay' | 'mask' | 'anti_removal',
  timelinePosition?: {
    start: number,
    end: number,
    duration: number
  },
  relative?: 'relative' | 'regionRelative'
}

export function overlay(overlayQualifiers: IOverlayQualifiers): Action {
  return new Action();
}

