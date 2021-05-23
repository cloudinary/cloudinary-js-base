import {CloudinaryMedia} from "../../../src/MediaEditing/assets/CloudinaryMedia";
import {Effect} from "../../../src/MediaEditing/actions/effect";

describe('Tests for cloning', () => {
  it('should clone resource', () => {
    const asset = new CloudinaryMedia('sample', {cloudName: 'demo'}, {analytics: false});

    const cloneAsset = asset.clone();

    //add transformation to asset
    asset.effect(Effect.sepia());

    //change public id of cloneAsset
    cloneAsset.setPublicID('dog');

    expect(cloneAsset.toURL()).toEqual('https://res.cloudinary.com/demo/image/upload/dog');
    expect(asset.toURL()).toEqual('https://res.cloudinary.com/demo/image/upload/e_sepia/sample');
  });
});

