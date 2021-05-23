/**
 * Utility function used to import items from the index of Base
 * @param {string} exportedObject - The name of an exported object in index, for example ImageTransformation.
 *                                  The result will be `import {ImageTransformation} from '../../dist'
 * @returns string
 */
function importFromMediaEditing(exportedObject: string): string {
  return `
    import {${exportedObject}} from "${process.cwd()}/dist/MediaEditing";
    // we console log to force the bundle not to tree shake
    console.log(${exportedObject});  
  `;
}

export {importFromMediaEditing};
