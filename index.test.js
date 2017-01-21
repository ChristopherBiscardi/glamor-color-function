import color from "./index.es.js";
import { plugins, css, styleSheet } from "glamor";
import { renderStatic } from "glamor/server";
import { StyleSheet } from "glamor/lib/sheet";
plugins.add(color);

describe("color()", () => {
  let sheet;

  test("converts `color()` to `rgb(0, 0, 230)`", () => {
    const styles = css({
      border: "1px solid pink",
      color: "color(blue blackness(+10%))",
      ":hover": { backgroundColor: "red" }
    });
    const res = renderStatic(() => styles);
    expect(
      res.css
    ).toBe(".css-1bl95om,[data-css-1bl95om]{border:1px solid pink;color:rgb(0, 0, 230);}.css-1bl95om:hover,[data-css-1bl95om]:hover{background-color:red;}");
  });
});
