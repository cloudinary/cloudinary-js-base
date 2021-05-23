/**
 * @description An interface passed externally from an outside environment into Base.
 *              These values are then distilled into the IAnalyticsOptions interface.
 *
 * @private
 */
export interface ITrackedPropertiesThroughAnalytics {
  sdkSemver: string; // Base Semver
  techVersion: string; // Node Version or 1.0.0 by default
  sdkCode: string; // Constant for Base?
  accessibility?: boolean; // Was accessibility used
  lazyload?: boolean; // Was lazy-load used
  responsive?: boolean; // Was responsive used
  placeholder?: boolean; // Was placeholder used
}

