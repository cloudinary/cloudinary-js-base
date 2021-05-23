import {Border} from "../../../src/MediaEditing/actions/border";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import {RoundCorners} from "../../../src/MediaEditing/actions/roundCorners";


describe('Tests for Transformation Action -- Border', () => {
  it('Creates a cloudinaryURL with border and color', () => {
    const url = createNewImage('sample')
      .border(Border.solid( 7, 'red'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/bo_7px_solid_red/sample');
  });

  it('Creates a cloudinaryURL with border and rgb #0000ff', () => {
    const url = createNewImage('sample')
      .border(Border.solid( 7, '#0000ff'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/bo_7px_solid_rgb:0000ff/sample');
  });

  it('Creates a cloudinaryURL with border and rgb #FFF', () => {
    const url = createNewImage('sample')
      .border(Border.solid( 7, '#FFF'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/bo_7px_solid_rgb:FFF/sample');
  });

  it('Creates a cloudinaryURL with border and rgb #FFFFFFFF', () => {
    const url = createNewImage('sample')
      .border(Border.solid(7, '#FFFFFFFF'))
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/bo_7px_solid_rgb:FFFFFFFF/sample');
  });

  it('Creates a cloudinaryURL with border and rgb #FFFFFFFF and round corners', () => {
    const url = createNewImage('sample')
      .border(
        Border.solid(7, '#FFFFFFFF')
          .roundCorners(RoundCorners.byRadius(50))
      )
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/bo_7px_solid_rgb:FFFFFFFF,r_50/sample');
  });
});
