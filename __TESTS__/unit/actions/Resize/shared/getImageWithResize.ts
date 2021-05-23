import ResizeSimpleAction from "../../../../../src/MediaEditing/actions/resize/ResizeSimpleAction";
import {CloudinaryImage} from "../../../../../src/MediaEditing/assets/CloudinaryImage";






/**
 * Utility function for resize image tests
 * @param resizeAction
 * @param type
 */
function getImageWithResize(resizeAction: ResizeSimpleAction, type:'url' | 'image'):CloudinaryImage | string {
  const img = new CloudinaryImage('sample', {cloudName: 'demo'})
    .resize(resizeAction);

  if (type === 'image') {
    return img;
  }

  if (type === 'url') {
    return img.toURL();
  }
}

export default getImageWithResize;
