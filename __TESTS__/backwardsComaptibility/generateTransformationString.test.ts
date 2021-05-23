import {generateTransformationString} from "../../src/MediaEditing/backwards/generateTransformationString";
import {createCloudinaryV1URL} from "../../src/MediaEditing/backwards/createCloudinaryURL";

describe('it works?', () => {
  it('omg', () => {
    const str = generateTransformationString({
      transformation: [
        {
          $width: 10
        },
        {
          width: "$width + 10 + width"
        }
      ]
    });
    expect(str).toEqual("$width_10/w_$width_add_10_add_w");
  });

  it("should support text values", function () {
    const t = generateTransformationString({
      effect: "$efname:100",
      $efname: "!blur!"
    });
    expect(t).toBe('$efname_!blur!,e_$efname:100');
  });

  it("should support string interpolation", function () {
    const t = generateTransformationString({
      crop: "scale",
      overlay: {
        text: "$(start)Hello $(name)$(ext), $(no ) $( no)$(end)",
        font_family: "Arial",
        font_size: "18"
      }
    });

    expect(t).toBe('c_scale,l_text:Arial_18:$(start)Hello%20$(name)$(ext)%252C%20%24%28no%20%29%20%24%28%20no%29$(end)');
  });

  it("should support power operator", function () {
    const t = generateTransformationString({
      transformation: [
        {
          $small: 150,
          $big: "$small ^ 1.5"
        }
      ]
    });
    expect(t).toBe("$big_$small_pow_1.5,$small_150");
  });

  it("text with text font_hinting", () => {
    const text_encoded = "Hello%20World%252C%20%252FNice%20to%20meet%20you%3F";
    const t = generateTransformationString({
      overlay: {
        text: 'Hello World, /Nice to meet you?',
        font_family: "Arial",
        font_size: "18",
        font_weight: "bold",
        font_style: "italic",
        letter_spacing: 4,
        line_spacing: 2,
        font_hinting: "medium"
      }
    });

    expect(t).toBe(`l_text:Arial_18_bold_italic_letter_spacing_4_line_spacing_2_hinting_medium:${text_encoded}`);
  });


  it('should use context value as user variables', function () {
    const options = {
      variables: [["$xpos", "ctx:!x_pos!_to_f"], ["$ypos", "ctx:!y_pos!_to_f"]],
      crop: "crop",
      x: "$xpos * w",
      y: "$ypos * h"
    };
    expect(generateTransformationString(options))
      .toContain('$xpos_ctx:!x_pos!_to_f,$ypos_ctx:!y_pos!_to_f,c_crop,x_$xpos_mul_w,y_$ypos_mul_h');
  });
  it("array should define a set of variables", function () {
    const options = {
      if: "face_count > 2",
      variables: [["$z", 5], ["$foo", "$z * 2"]],
      crop: "scale",
      width: "$foo * 200"
    };
    const t = generateTransformationString(options);
    expect(t).toEqual("if_fc_gt_2,$z_5,$foo_$z_mul_2,c_scale,w_$foo_mul_200");
  });
  it("'$key' should define a variable", function () {
    const options = {
      transformation: [
        {
          $foo: 10
        },
        {
          if: "face_count > 2"
        },
        {
          crop: "scale",
          width: "$foo * 200 / face_count"
        },
        {
          if: "end"
        }
      ]
    };
    const t = generateTransformationString(options);
    expect(t).toEqual("$foo_10/if_fc_gt_2/c_scale,w_$foo_mul_200_div_fc/if_end");
  });
  it("should not change variable names even if they look like keywords", function () {
    const options = {
      transformation: [
        {
          $width: 10
        },
        {
          width: "$width + 10 + width"
        }
      ]
    };
    const t = generateTransformationString(options);
    expect(t).toEqual("$width_10/w_$width_add_10_add_w");
  });

  it("should support power operator", function () {
    const options = {
      transformation: [
        {
          $small: 150,
          $big: "$small ^ 1.5"
        }
      ]
    };
    const t = generateTransformationString(options);
    expect(t).toEqual("$big_$small_pow_1.5,$small_150");
  });
});
