import {createNewImage} from "../__TESTS__/TestUtils/createCloudinaryImage";
import {CompassGravity} from "../src/qualifiers/gravity/compassGravity/CompassGravity";
import {ImageSource} from "../src/qualifiers/source/sourceTypes/ImageSource";
import {fill} from "./actions/fill";
import {crop} from "./actions/crop";
import {overlay} from "./actions/overlay";
import {saturation} from "./actions/saturation";
import {vignette} from "./actions/vignette";
import {roundCorners} from "./actions/roundCorners";

// createNewImage().overlay(Overlay.source().blendMode().position().timeline())

createNewImage('sample')
  .transform(
    fill(200, 200),
    fill({
      width: 400,
      height:250,
      gravity: new CompassGravity('east')
    }),
    overlay({
      source: new ImageSource('sample').transform(
        crop({
          width: 100,
          height: 100
        })
      ),
      blendMode: 'screen',
      relative: 'regionRelative'
    }),
    saturation(),
    vignette(),
    roundCorners(),

  );



// (new ImageTag('coffee_cup.jpg'))
// ->resize(Resize::fill()->width(400)->height(250)->gravity(Gravity::compass(Compass::south())))

// ->overlay(
//   Overlay::source(Source::image('nice_couple')
// ->transformation((new ImageTransformation())
//    ->resize(Resize::crop()->width(1.3)->height(1.3)
//
//    ->gravity( Gravity::focusOn(FocusOn::faces()) )
//
//    ->regionRelative()
//
//    )
// ->adjust(Adjust::saturation()->level(50))
// ->effect(Effect::vignette())
// ->resize(Resize::scale()->width(100))
// ->roundCorners(RoundCorners::max())))
// ->position((new Position())
// ->gravity(Gravity::compass(Compass::center()))
// ->offsetX(-20)->offsetY(20)))

// ->overlay(
//   Overlay::source(Source::image('balloon')
// ->transformation((new ImageTransformation())
// ->resize(Resize::scale()->height(55))
// ->adjust(Adjust::hue()->level(-20))
// ->rotate(Rotate::byAngle(5))))
// ->position((new Position())
// ->offsetX(30)->offsetY(5)))
// ->overlay(
//   Overlay::source(
//     Source::text('Love', (new TextStyle('Cookie', 40))
// ->fontWeight(FontWeight::bold()))
// ->transformation((new ImageTransformation())
// ->effect(Effect::colorize()->color(Color::rgb('F08')))
// ->rotate(Rotate::byAngle(20))))
// ->position((new Position())
// ->offsetX(-45)->offsetY(44)))
// ->resize(Resize::crop()->width(300)->height(250)->x(30))
// ->roundCorners(RoundCorners::byRadius(60));
