import {image} from "../../../src/MediaEditing/qualifiers/source";
import {scale} from "../../../src/MediaEditing/actions/resize";
import {Reshape} from "../../../src/MediaEditing/actions/reshape";
import {Position} from "../../../src/MediaEditing/qualifiers/position";
import {Gravity} from "../../../src/MediaEditing/qualifiers/gravity";
import {Compass} from "../../../src/MediaEditing/qualifiers/compass";
import {Transformation} from "../../../src/MediaEditing/transformation/Transformation";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";




describe('Tests for Transformation Action -- Cutter', () => {
  it('Creates a reshape.cutByImage (cutter)overlay', () => {
    const url = createNewImage('main')
      .reshape(Reshape.cutByImage(image('sourceImage').transformation(
        new Transformation().resize(scale().width(100))
      )))
      .toURL();

    expect(url).toContain('l_sourceImage/c_scale,w_100/fl_cutter,fl_layer_apply/main');
  });

  it('Creates a reshape.cutByImage (cutter)overlay with position g_center', () => {
    const url = createNewImage('main')
      .reshape(
        Reshape.cutByImage(
          image('sourceImage'))
          .position(
            new Position().gravity(Gravity.compass(Compass.center()))
          )
      )
      .toURL();

    expect(url).toContain('l_sourceImage/fl_cutter,fl_layer_apply,g_center/main');
  });

  it('Creates a reshape.cutByImage (cutter)overlay with position g_north', () => {
    const url = createNewImage('main')
      .reshape(
        Reshape.cutByImage(
          image('sourceImage'))
          .position(
            new Position().gravity(Gravity.compass(Compass.north()))
          )
      )
      .toURL();

    expect(url).toContain('l_sourceImage/fl_cutter,fl_layer_apply,g_north/main');
  });

  it('Distorts an image with an arc', () => {
    const url = createNewImage()
      .reshape(Reshape.distortArc(200))
      .toString();

    expect(url).toBe('e_distort:arc:200');
  });

  it('Shears an image with constructor arguments', () => {
    const url = createNewImage()
      .reshape(Reshape.shear(100, 200))
      .toString();

    expect(url).toBe('e_shear:100:200');
  });

  it('Distorts an image with coordinates', () => {
    const url = createNewImage()
      .reshape(Reshape.distort([1, 2, 3, 4, 5, 6, 7, 8]))
      .toString();

    expect(url).toBe('e_distort:1:2:3:4:5:6:7:8');
  });

  it('Trims an image', () => {
    const url = createNewImage()
      .reshape(Reshape.trim().colorOverride('blue').colorSimilarity(15))
      .toString();

    expect(url).toBe('e_trim:15:blue');
  });
});
