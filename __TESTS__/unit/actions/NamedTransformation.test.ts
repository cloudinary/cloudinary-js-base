import {name} from "../../../src/MediaEditing/actions/namedTransformation";
import {scale} from "../../../src/MediaEditing/actions/resize";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";

describe('Tests for Transformation Action -- NamedTransformation', () => {
  it('Ensures NamedTransformation is accepted as an action to ImageTransformation', () => {
    const tImage = createNewImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.namedTransformation(name('foobar'))
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with name', () => {
    const url = createNewImage('sample')
      .namedTransformation(name('foobar'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/t_foobar/sample');
  });

  it('Creates a cloudinaryURL with name and resize', () => {
    const url = createNewImage('sample')
      .resize(scale(100, 100))
      .namedTransformation(name('foobar'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/c_scale,h_100,w_100/t_foobar/sample');
  });
});
