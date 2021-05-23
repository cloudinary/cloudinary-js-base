/**
 * @jest-environment node
 */


import pkg from '../../../src/MediaEditing/package.json';
import {createNewImageWithAnalytics} from "./testUtils/createNewImageWithAnalytics";

describe('Add analytics to a regular URL', () => {
  it('Works with default values', () => {
    const cldImage = createNewImageWithAnalytics('sample');

    // Generate a URL without any special configuration
    const sigFromDefaultValues = cldImage.toURL().split('?')[1];
    // Generate a URL with provided sdkSemver and techVersion, but we're using the values that should be given by default
    const sigFromExplicitPackageVersion = cldImage.toURL({
      trackedAnalytics: {
        sdkSemver: pkg.version.split('-')[0], // remove -beta, -alpha or other tagged versions from the version string
        techVersion: process.versions.node
      }
    }).split('?')[1];

    // AT AAB WE 0
    expect(sigFromDefaultValues).not.toBeUndefined();
    expect(sigFromDefaultValues).toBe(sigFromExplicitPackageVersion);
  });


  it('Can overwrite default values', () => {
    const cldImage = createNewImageWithAnalytics('sample');
    // AZ -> Algo A, SDK Code is Z
    // Alh -> 1.24.0 from package.json
    // AM -> 12.0.0 Underlying tech
    // D -> Accessibility
    expect(cldImage.toURL({
      trackedAnalytics: {
        sdkCode: 'Z', // arbitrary, just show we can overwrite it
        sdkSemver: '1.24.0', // If not specified, this is taken from package.json
        techVersion: '12.0.0',
        accessibility: true
      }
    })).toContain('?_a=AZAlhAMD');
  });

  it('Test lazyload feature value', () => {
    const cldImage = createNewImageWithAnalytics('sample');
    // AZ -> Algo A, SDK Code is Z
    // Alh -> 1.24.0 from package.json
    // AM -> 12.0.0 Underlying tech
    // C -> lazyload
    expect(cldImage.toURL({
      trackedAnalytics: {
        sdkCode: 'Z',
        sdkSemver: '1.24.0',
        techVersion: '12.0.0',
        lazyload: true
      }
    })).toContain('?_a=AZAlhAMC');
  });

  it('Test responsive feature value', () => {
    const cldImage = createNewImageWithAnalytics('sample');
    // AZ -> Algo A, SDK Code is Z
    // Alh -> 1.24.0 from package.json
    // AM -> 12.0.0 Underlying tech
    // A -> responsive
    expect(cldImage.toURL({
      trackedAnalytics: {
        sdkCode: 'Z',
        sdkSemver: '1.24.0',
        techVersion: '12.0.0',
        responsive: true
      }
    })).toContain('?_a=AZAlhAMA');
  });

  it('Test placeholder feature value', () => {
    const cldImage = createNewImageWithAnalytics('sample');
    // AZ -> Algo A, SDK Code is Z
    // Alh -> 1.24.0 from package.json
    // AM -> 12.0.0 Underlying tech
    // B -> placeholder
    expect(cldImage.toURL({
      trackedAnalytics: {
        sdkCode: 'Z',
        sdkSemver: '1.24.0',
        techVersion: '12.0.0',
        placeholder: true
      }
    })).toContain('?_a=AZAlhAMB');
  });

  it('Can be turned off', () => {
    const cldImage = createNewImageWithAnalytics('sample', {}, {
      analytics: false
    });

    expect(cldImage.toURL({
      trackedAnalytics: {
        sdkCode: 'M',
        sdkSemver: '1.24.0', // If not specified, this is taken from package.json
        techVersion: '12.0.0'
      }
    })).not.toContain('?'); // we shouldn't have a query param at all
  });


  it('Expect to error for very large versions', () => {
    const cldImage = createNewImageWithAnalytics('sample');

    expect(cldImage.toURL({
      trackedAnalytics: {
        sdkSemver: '50.50.50' // If not specified, this is taken from package.json
      }
    })).toContain('?_a=E');
  });

  it('Expect to error for invalid versions', () => {
    const cldImage = createNewImageWithAnalytics('sample');
    // All these cases should error the analytics function
    ['abc', '1', 'foo.bar', '-55'].forEach((version) => {
      // Try catch to provide a a meaningful error message
      // This will fail the test and print what case failed exactly
      try {
        expect(cldImage.toURL({
          trackedAnalytics: {
            sdkSemver: version // If not specified, this is taken from package.json
          }
        })).toContain('?_a=E');
      } catch (e) {
        e.message = `Error for {{${version}}} ${e.message}`;
        throw e;
      }
    });
  });
});
