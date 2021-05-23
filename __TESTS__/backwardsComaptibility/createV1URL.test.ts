import {createCloudinaryV1URL} from "../../src/MediaEditing/backwards/createCloudinaryURL";
import {generateTransformationString} from "../../src/MediaEditing/backwards/generateTransformationString";

describe('Create v1 urls', () => {
  it('works', () => {
    const url = createCloudinaryV1URL('sample', {
      cloud_name: 'demo',
      width:100
    });

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/w_100/sample');
  });

  it('Sets resource_type and type', () => {
    const url = createCloudinaryV1URL('sample', {
      cloud_name: 'demo',
      resource_type: 'video',
      type: 'fetch',
      width:100
    });

    expect(url).toBe('https://res.cloudinary.com/demo/video/fetch/w_100/sample');
  });

  it('Sets resource_type and type', () => {
    const url = createCloudinaryV1URL('sample', {
      cloud_name: 'demo',
      resource_type: 'video',
      type: 'fetch',
      width:100
    });

    expect(url).toBe('https://res.cloudinary.com/demo/video/fetch/w_100/sample');
  });

  it("should include conditional transformation", function () {
    let url = createCloudinaryV1URL("test", {
      cloud_name: 'test123',
      resource_type: 'video',
      if: "duration > 30",
      width: 100
    });
    expect(url).toEqual("https://res.cloudinary.com/test123/video/upload/if_du_gt_30,w_100/test");
    url = createCloudinaryV1URL("test", {
      cloud_name: 'test123',
      resource_type: 'video',
      if: "initialDuration > 30",
      width: 100
    });
    expect(url).toEqual("https://res.cloudinary.com/test123/video/upload/if_idu_gt_30,w_100/test");
    url = createCloudinaryV1URL("test", {
      cloud_name: 'test123',
      resource_type: 'video',
      if: "initial_duration > 30",
      width: 100
    });
    expect(url).toEqual("https://res.cloudinary.com/test123/video/upload/if_idu_gt_30,w_100/test");
  });

  it("should allow multiple conditions when chaining transformations ", function () {
    const url = createCloudinaryV1URL("sample", {
      cloud_name: 'test123',
      transformation: [
        {
          if: "w_lt_200",
          crop: "fill",
          height: 120,
          width: 80
        },
        {
          if: "w_gt_400",
          crop: "fit",
          width: 150,
          height: 150
        },
        {
          effect: "sepia"
        }
      ]
    });
    expect(url).toEqual("https://res.cloudinary.com/test123/image/upload/if_w_lt_200,c_fill,h_120,w_80/if_w_gt_400,c_fit,h_150,w_150/e_sepia/sample");
  });

  it("should translate operators", function () {
    const url = createCloudinaryV1URL("sample", {
      cloud_name: 'test123',
      if: "w < 200",
      crop: "fill",
      height: 120,
      width: 80
    });
    expect(url).toEqual("https://res.cloudinary.com/test123/image/upload/if_w_lt_200,c_fill,h_120,w_80/sample");
  });

  it("should allow multiple tags condition", function () {
    const url = createCloudinaryV1URL("sample", {
      cloud_name: 'test123',
      transformation: [
        {
          if: "!tag1:tag2:tag3!_in_tags",
          crop: "fill",
          height: 120,
          width: 80
        },
        {
          if: "else",
          crop: "fit",
          width: 150,
          height: 150
        },
        {
          effect: "sepia"
        }
      ]
    });
    expect(url).toEqual("https://res.cloudinary.com/test123/image/upload/if_!tag1:tag2:tag3!_in_tags,c_fill,h_120,w_80/if_else,c_fit,h_150,w_150/e_sepia/sample");
  });

  it("should include the if_end as the last parameter in its component", function () {
    const url = createCloudinaryV1URL("sample", {
      cloud_name: 'test123',
      transformation: [
        {
          if: "w_lt_200"
        },
        {
          crop: "fill",
          height: 120,
          width: 80,
          effect: "sharpen"
        },
        {
          effect: "brightness:50"
        },
        {
          effect: "shadow",
          color: "red"
        },
        {
          if: "end"
        }
      ]
    });
    expect(url).toEqual("https://res.cloudinary.com/test123/image/upload/if_w_lt_200/c_fill,e_sharpen,h_120,w_80/e_brightness:50/co_red,e_shadow/if_end/sample");
  });

  it("should support if_else with transformation parameters", function () {
    const url = createCloudinaryV1URL("sample", {
      cloud_name: 'test123',
      transformation: [
        {
          if: "w_lt_200",
          crop: "fill",
          height: 120,
          width: 80
        },
        {
          if: "else",
          crop: "fill",
          height: 90,
          width: 100
        }
      ]
    });
    expect(url).toEqual("https://res.cloudinary.com/test123/image/upload/if_w_lt_200,c_fill,h_120,w_80/if_else,c_fill,h_90,w_100/sample");
  });

  it("if_else should be without any transformation parameters", function () {
    const url = createCloudinaryV1URL("sample", {
      cloud_name: 'test123',
      transformation: [
        {
          if: "aspect_ratio_lt_0.7"
        },
        {
          crop: "fill",
          height: 120,
          width: 80
        },
        {
          if: "else"
        },
        {
          crop: "fill",
          height: 90,
          width: 100
        }
      ]
    });
    expect(url).toEqual("https://res.cloudinary.com/test123/image/upload/if_ar_lt_0.7/c_fill,h_120,w_80/if_else/c_fill,h_90,w_100/sample");
  });

  it("should support and translate operators:  '=', '!=', '<', '>', '<=', '>=', '&&', '||'", function () {
    const allOperators = 'if_' + 'w_eq_0_and' + '_h_ne_0_or' + '_ar_lt_0_and' + '_pc_gt_0_and' + '_fc_lte_0_and' + '_w_gte_0' + ',e_grayscale';

    expect(createCloudinaryV1URL("sample", {
      cloud_name: 'test123',
      "if": "w = 0 && height != 0 || aspectRatio < 0 and pageCount > 0 and faceCount <= 0 and width >= 0",
      "effect": "grayscale"
    })).toMatch(new RegExp(allOperators));
  });

  it("should support text values", function () {
    const url = createCloudinaryV1URL("sample", {
      cloud_name: 'demo',
      effect: "$efname:100",
      $efname: "!blur!"
    });
    expect(url).toBe(`https://res.cloudinary.com/demo/image/upload/$efname_!blur!,e_$efname:100/sample`);
  });

  it("should support string interpolation", function () {
    const url = createCloudinaryV1URL("sample", {
      cloud_name: 'demo',
      crop: "scale",
      overlay: {
        text: "$(start)Hello $(name)$(ext), $(no ) $( no)$(end)",
        font_family: "Arial",
        font_size: "18"
      }
    });

    expect(url).toContain(`l_text:Arial_18:$(start)Hello%20$(name)$(ext)%252C%20%24%28no%20%29%20%24%28%20no%29$(end)/sample`);
  });

  it("should escape public_ids", function () {
    const expressions = [
      // [source, target]
      ["a b", "a%20b"],
      ["a+b", "a%2Bb"],
      ["a%20b", "a%20b"],
      ["a-b", "a-b"],
      ["a??b", "a%3F%3Fb"],
      ["parentheses(interject)", "parentheses(interject)"],
      ["abcαβγאבג", "abc%CE%B1%CE%B2%CE%B3%D7%90%D7%91%D7%92"]
    ];
    expressions.forEach(([source, target]) => {
      expect(createCloudinaryV1URL(source, {cloud_name: 'demo'})).toEqual(`https://res.cloudinary.com/demo/image/upload/${target}`);
    });
  });

  it("Should generate transformation with border objects", function () {
    const url = createCloudinaryV1URL("sample", {
      cloud_name: 'demo',
      border: {
        width: 5,
        color: '#ffaabbdd'
      }
    });

    expect(url).toContain(`image/upload/bo_5px_solid_rgb:ffaabbdd/sample`);
  });

  it("Should generate transformation with border string", function () {
    const url = createCloudinaryV1URL("sample", {
      cloud_name: 'demo',
      border: '4px_solid_white'
    });

    expect(url).toContain(`image/upload/bo_4px_solid_white/sample`);
  });

  it("radius as an array is parsed", function () {
    const options = {
      cloud_name: 'demo',
      transformation: [
        {
          radius: [10, 20, 30, 40]
        }
      ]
    };
    const t = createCloudinaryV1URL('sample', options);
    expect(t).toContain("r_10:20:30:40");
  });

  it("radius accepts a string value", function () {
    const options = {
      cloud_name: 'demo',
      transformation: [
        {
          radius: 'max'
        }
      ]
    };
    const t = createCloudinaryV1URL('sample', options);
    expect(t).toContain("r_max");
  });
});
