/**
 * Utility function used to import items from ./dist
 * @param {string} pathInDist - relative path inside ./dist, for example 'actions/resize'
 *                              The result will be `import resize from '../../dist/resize`;
 * @returns string
 */
function importFromDist(pathInDist: string, namedVariableName: string): string {

  return `
    import {${namedVariableName}} from '${process.cwd()}/dist/MediaEditing/${pathInDist}';
    // we console log to force the bundle not to tree shake
    console.log(${namedVariableName});
  `;
}


export default importFromDist;
