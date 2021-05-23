import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import json from '@rollup/plugin-json';

export default [{
  input: 'src/MediaEditing/index.ts',
  output: [
    {
      file: 'dist/bundles/umd/base.js',
      format: 'umd',
      name:'CloudinaryBaseSDK'
    }
  ],
  plugins: [
    json(),
    resolve(),
    typescript({ target: "es5"})
  ]
}];

