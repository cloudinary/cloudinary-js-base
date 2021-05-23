import {PSDTools} from "../../../src/MediaEditing/actions/psdTools";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";

describe('Tests for Transformation Action -- PSDTools', () => {
  it('Creates a cloudinaryURL with clip number', () => {
    const url = createNewImage()
      .psdTools(PSDTools.clip().byIndex(9))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/fl_clip,pg_9/sample');
  });

  it('Creates a cloudinaryURL with clip string', () => {
    const url = createNewImage()
      .psdTools(PSDTools.clip().byName('path'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/fl_clip,pg_name:path/sample');
  });

  it('Creates a cloudinaryURL with clip evenOdd', () => {
    const url = createNewImage()
      .psdTools(PSDTools.clip().byIndex(9).evenOdd())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/fl_clip_evenodd,pg_9/sample');
  });

  it('Creates a cloudinaryURL with getLayer.byNumber', () => {
    const url = createNewImage()
      .psdTools(PSDTools.getLayer().byIndex(4))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/pg_4/sample');
  });

  it('Creates a cloudinaryURL with getLayer.byRange', () => {
    const url = createNewImage()
      .psdTools(PSDTools.getLayer().byRange(4, 10))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/pg_4-10/sample');
  });

  it('Creates a cloudinaryURL with getLayer.byName', () => {
    const url = createNewImage()
      .psdTools(PSDTools.getLayer().byName('sample'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/pg_name:sample/sample');
  });

  it('Creates a cloudinaryURL with smartObject.byIndex', () => {
    const url = createNewImage()
      .psdTools(PSDTools.smartObject().byIndex(8).byIndex(5))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/pg_embedded:8;5/sample');
  });

  it('Creates a cloudinaryURL with smartObject.byLayerName', () => {
    const url = createNewImage()
      .psdTools(PSDTools.smartObject().byLayerName('myLayer').byLayerName('myLayer2'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/pg_embedded:name:myLayer;myLayer2/sample');
  });

  it('Uses multiple qualifiers', () => {
    expect(PSDTools
      .getLayer()
      .byIndex(1)
      .byRange(5, 7)
      .toString()
    ).toBe('pg_1;5-7'); // pg_1;5-7
    expect(PSDTools
      .getLayer()
      .byRange(4, 7)
      .byIndex(9)
      .toString()
    ).toBe('pg_4-7;9');
    expect(PSDTools
      .getLayer()
      .byName("lala")
      .byName('fofo')
      .toString()
    ).toBe('pg_name:lala;fofo');
  });
});
