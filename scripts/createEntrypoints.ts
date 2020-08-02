/* eslint @typescript-eslint/no-var-requires: 0 */

/**
 * This file is responsible for creating the proper /dist files.
 * Typescript/Rollup will generate the bundles (./dist/bundles/esm & ./dist/bundles/umd)
 * However, to create ./dist/actions/adjust (as an example), some more work is needed.
 *
 * This file creates a package.json in each desired import path (@base/actions/adjust for example).
 * The package.json points to the right file in the ESM module
 * (@base/actions/adjust points to @base/bundles/esm/actions/adjust)
 */

const {
  createEntryPointFromESMPath,
  createMainEntryPoint,
  createUMDBundleEntryPoint
} = require('./lib/entryPointsLib');

const validatePackageFiles = require('./validatePackageFiles');

// Create an Entry Point from everything under bundles/esm/actions -> dist/actions
const expectedActionsFiles = createEntryPointFromESMPath('actions', 'actions');

// Create an Entry Point from everything under bundles/esm/constants -> dist/constants
const expectedConstantsFiles = createEntryPointFromESMPath('constants', 'constants');

// Create an Entry Point from everything under bundles/esm/params -> dist/params
createEntryPointFromESMPath('params', 'params');

// Create an Entry Point from everything under bundles/esm/params -> dist/params
createEntryPointFromESMPath('params', 'params');

// Allows import from '@base' (With types)
createMainEntryPoint();

// Allows import from '@base/bundles/umd' (With types)
createUMDBundleEntryPoint();

console.log('Created ./dist entrypoints');

validatePackageFiles({
  ...expectedActionsFiles,
  ...expectedConstantsFiles,
  types: false, // Exclude from *all* checks, we don't want to test Typescript
  bundles: {
    // For any level, we ensure that we don't have unwanted files
    // if this flag exists, we skip this check (meaning there may be more siblings)
    // This directory is generated by Typescript, we trust that it works fine
    esm: {
      $suppressNonRequiredFilesError: true,
      'index.js': 'file'
    },
    umd: {
      'base.js': 'file',
      'package.json': 'file'
    }
  },
  'package.json': 'file'
});

console.log('Validated ./dist entrypoints');

// Force typescript to treat this file as a module
export {};
