import colorFn from "css-color-function";
export default function color({ selector, style }) {
  Object.entries(style).map(([ key, val ]) => {
    if (val.startsWith("color(")) {
      style[key] = colorFn.convert(val);
    }
  });
  return { selector, style };
}
