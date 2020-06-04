// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

/**
 * @description Capitalize the first character of a string
 * @param str
 * @return {string}
 */
function capitalize(str) {
  return str.toUpperCase()[0] + str.slice(1);
}


/**
 * @description Generates a package.json in actions/ and each actions/{name} directory.
 *              That allows imports such as `import {scale} from '@cloudinary/base/actions/resize`
 */
function createActionsEntryPoints() {
  const dir = 'src/actions';
  const files = fs.readdirSync(dir);

  // Create actions
  fs.mkdirSync(`dist/actions`);
  files.forEach((name) => {
    const stat = fs.lstatSync(`${dir}/${name}`);


    if (stat.isDirectory()) {
      fs.mkdirSync(`dist/actions/${name}`);

      const hasTypes = fs.existsSync(`./dist/types/actions/${name}/${capitalize(name)}.d.ts`);
      const hasFile = fs.existsSync(`./dist/bundles/esm/actions/${name}/${capitalize(name)}.js`);

      if (!hasFile || !hasTypes) {
        throw '\n***\nBUILD ERROR - Invalid folder structure detected, action must have a directory name and a capitalized file name: resize/Resize.js\n***\n';
      }

      fs.writeFileSync(`dist/actions/${name}/package.json`, JSON.stringify({
        "types": `../../types/actions/${name}/${capitalize(name)}.d.ts`,
        "main": `../../bundles/esm/actions/${name}/${capitalize(name)}.js`
      }, null, '\t'));
    }
  });

  // create umd
  fs.writeFileSync(`dist/bundles/umd/package.json`, JSON.stringify({
    "types": `../../types/index.d.ts`,
    "main": `./base.js`
  }, null, '\t'));
}


/**
 * @description Since only ./dist/ is packaged to npm, we need to copy a proper package.json file to it
 *              That will allow `import {TransformableImage} from '@cloudinary/base`
 */
function createMainEntryPoint() {
  const projectJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
  delete projectJson.scripts;
  delete projectJson.devDependencies;
  projectJson.main = './bundles/esm/index.js';
  fs.writeFileSync('./dist/package.json', JSON.stringify(projectJson, null, '\t'));
}

createActionsEntryPoints();
createMainEntryPoint();
