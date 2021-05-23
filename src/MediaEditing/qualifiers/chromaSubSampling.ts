
/**
 * @summary qualifier
 * @memberOf Qualifiers.ChromeSubSampling
 */
function chroma444():number { return 444; }

/**
 * @summary qualifier
 * @memberOf Qualifiers.ChromeSubSampling
 */
function chroma420():number { return 420; }


/**
 * @description Contains functions to select the chroma subsampling setting.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/image_transformations#toggling_chroma_subsampling | Toggling chroma subsampling}
 * @memberOf Qualifiers
 * @namespace ChromeSubSampling
 * @see To be used in {@link Actions.Delivery|Delivery} action (Quality)
 * @see To be used in {@link Actions.Delivery.DeliveryQualityAction|Quality Action} class
 */
const ChromaSubSampling = {
  chroma444,
  chroma420
};

export {
  ChromaSubSampling,
  chroma420,
  chroma444
};

