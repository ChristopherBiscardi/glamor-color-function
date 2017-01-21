# glamor-color-function

A port of
[postcss-color-function](https://github.com/postcss/postcss-color-function)
for glamor, using
[css-color-function](https://github.com/ianstormtaylor/css-color-function).

Transform glamor declarations with `color()`:

```javascript
css({
  border: "1px solid pink",
  color: "color(blue blackness(+10%))",
  ":hover": { backgroundColor: "red" }
})
```

into

```css
.css-1bl95om,[data-css-1bl95om]{
  border: 1px solid pink;
  color: rgb(0, 0, 230);
}
.css-1bl95om:hover,[data-css-1bl95om]:hover{
  background-color: red;
}
```

# Usage

```javascript
import color from 'glamor-color-function';
import { plugins } from 'glamor';
plugins.add(color);
```

## ECMAScript

You will need polyfills for the following features (which are provided
for you if you are using babel's runtime).

* Object.entries
* "".startsWith()

A non-compiled version can be required at `index.es.js` and is
specified as `jsnext:main`. This version includes the following
language features in addition:

* Destructuring
* Object literal shorthand
