import {byRadius, max} from 'MediaEditing/actions/roundCorners';
import {createNewImage} from "../../TestUtils/createCloudinaryImage";





describe('Tests for Transformation Action -- RoundCorners', () => {

  it('Ensure roundCorners accepts 1 radius', () => {
    const url = createNewImage('sample')
      .roundCorners(byRadius(25))
      .toURL();
    expect(url).toContain('r_25');
  });

  it('Ensure roundCorners accepts 2 radius', () => {
    const url = createNewImage('sample')
      .roundCorners(byRadius(25, 20))
      .toURL();
    expect(url).toContain('r_25:20');
  });

  it('Ensure roundCorners accepts 3 radius', () => {
    const url = createNewImage('sample')
      .roundCorners(byRadius(25, 20, 15))
      .toURL();
    expect(url).toContain('r_25:20:15');
  });

  it('Ensure roundCorners accepts 4 radius', () => {
    const url = createNewImage('sample')
      .roundCorners(byRadius(25, 20, 15, 10))
      .toURL();
    expect(url).toContain('r_25:20:15:10');
  });

  it('Ensure roundCorners accepts 4 radius, including zeroes', () => {
    const url = createNewImage('sample')
      .roundCorners(byRadius(25, 0, 0, 0))
      .toURL();
    expect(url).toContain('r_25:0:0:0');
  });

  it('Ensure roundCorners accepts max radius', () => {
    const url = createNewImage('sample')
      .roundCorners(max())
      .toURL();
    expect(url).toContain('r_max');
  });
});
