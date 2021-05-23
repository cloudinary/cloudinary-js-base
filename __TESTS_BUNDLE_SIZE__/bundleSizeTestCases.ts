/**
 * This file contains the test cases for the BundleSizeTests
 * Run all tests by running `npm run test:size`
 */

import importFromDist from "./utils/stringGenerators/importFromDist";
import {importFromMediaEditing} from "./utils/stringGenerators/importFromMediaEditing";
import {ITestCase} from "./interfaces/ITestCase";

/**
 * @description - Each test case is built using an array of imports  (importsArray)
 *                Each element in the array is string, an import statement: `import resize from '...'; console.log(resize)`
 *                Before we export, we combine all those strings into one long string, contained within importString;
 */
const bundleSizeTestCases:ITestCase[] = [
  {
    name: 'Tests CloudinaryImage with Resize',
    sizeLimitInKB: 20,
    importsArray: [
      importFromDist('assets/CloudinaryImage', 'CloudinaryImage'),
      importFromDist('instance/Cloudinary', 'Cloudinary'),
      importFromDist('actions/resize', 'Resize')
    ]
  },
  {
    name: 'Tests CloudinaryImage with Resize and Adjust',
    sizeLimitInKB: 30,
    importsArray: [
      importFromDist('assets/CloudinaryImage', 'CloudinaryImage'),
      importFromDist('instance/Cloudinary', 'Cloudinary'),
      importFromDist('actions/resize', 'Resize'),
      importFromDist('actions/adjust', 'Adjust')
    ]
  },
  {
    name: 'Tests CloudinaryImage with Resize, Adjust and Border',
    sizeLimitInKB: 30,
    importsArray: [
      importFromDist('assets/CloudinaryImage', 'CloudinaryImage'),
      importFromDist('instance/Cloudinary', 'Cloudinary'),
      importFromDist('actions/resize', 'Resize'),
      importFromDist('actions/adjust', 'Adjust'),
      importFromDist('actions/border', 'Border')
    ]
  },
  {
    name: 'Tests CloudinaryImage image with Resize, adjust and delivery',
    sizeLimitInKB: 32,
    importsArray: [
      importFromDist('assets/CloudinaryImage', 'CloudinaryImage'),
      importFromDist('instance/Cloudinary', 'Cloudinary'),
      importFromDist('actions/resize', 'Resize'),
      importFromDist('actions/adjust', 'Adjust'),
      importFromDist('actions/delivery', 'Delivery')
    ]
  },
  {
    name: 'Tests Overlay imports',
    sizeLimitInKB: 50,
    importsArray: [
      importFromDist('assets/CloudinaryImage', 'CloudinaryImage'),
      importFromDist('actions/overlay', 'Overlay'),
      importFromDist('qualifiers/source', 'Source'),
      importFromDist('transformation/Transformation', 'Transformation'),
      importFromDist('actions/resize', 'crop')
    ]
  },
  {
    name: 'Import backwards comaptiblity function',
    sizeLimitInKB: 12,
    importsArray: [
      importFromMediaEditing('createCloudinaryV1URL')
    ]
  },
  {
    name: 'Import all of the SDK',
    sizeLimitInKB: 110,
    importsArray: [
      importFromMediaEditing('CloudinaryBaseSDK')
    ]
  }
];

/**
 * Each case is an array of strings,
 * Before we export, we make sure we combine them so that `importString` contains a single long string
 */
export default <ITestCase[]> bundleSizeTestCases.map((testCase): ITestCase => {
  // Join all the strings into one long string, so we can write it to a file
  testCase.importString = testCase.importsArray.join('');
  return testCase;
});
