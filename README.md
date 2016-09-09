vertical-rhythmic 3.0.0
=======================

Vertical-rhythmic is now a toolkit for responsive designing. It includes :

- [fluid typography](https://www.smashingmagazine.com/2016/05/fluid-typography/)
- font optimizations
- grid helper
- [modular scale](https://github.com/modularscale/modularscale-sass) support
- and vertical rhythms of course

Install
-------

```
bower install vertical-rhythmic --save
npm install pyrsmk/vertical-rhythmic --save
```

Quick working example with modular scale
----------------------------------------

```scss
// Set modular scale vars
$ms-ratio: $major-second;
$ms-base: 1em;

// Set vertical-rhythm vars
$vr-rhythm: ms(3);

html {
	// Set our fluid typography
	@include vr-fluid(ms(0), ms(2), 30em, 100em);
	// Set the base line height for our rhythm
	// (we're stripping the unit to have a proportional line height)
	line-height: vr-strip(vr(1));
	// Add some basic font optimizations
	@include vr-optimize();
}

// Set a margin of 1 rhythm length
main {
	margin: vr(1);
}

// Set a margin of 1 rhythm length,
// but adapted for a font size of 3em
h1 {
	font-size: 3em;
	margin: vr(1, 3em);
}
```

Fluid typography
----------------

It is a good pratice to have a fluid typography instead of just changing the font size at responsive breakpoints (with `@media`). With fluid font sizing we can fill all the gaps between our breakpoints. To know more about this subject, you can read the [following article](https://www.smashingmagazine.com/2016/05/fluid-typography/).

First, choose your minimum and maximum font sizes, and your minimum and maximum width breakpoints. The min/max font size will be reached when the min/max width will be reached too.

```scss
html {
	@include vr-fluid(16px, 20px, 480px, 1600px);
}
```

Optimizations
-------------

If you want, you can apply some font optimizations, that seems recommended.

```scss
html {
	@include vr-optimize();
}
```

It will print :

```css
html {
	font-feature-settings: 'kern' 1;
	font-kerning: normal;
	-webkit-text-size-adjust: 100%;
	text-rendering: optimizeLegibility;
}
```

Grid helper
-----------

The grid is a well-known tool to align all our blocks against the rhythm. But it is currently inconsistent with fluid typography. As stated in this [codepen](https://codepen.io/MadeByMike/pen/bEEGvv) :

> If the lines seem to glitch out occasionally it's not because the vertical rhythm is broken. I think it's because of the way the browser rounds. The height of the gradient background that draws the lines on the body element is only rounded once, whereas real line hight is rounded on a per element basis. This adds up by the time you get to the bottom of the page. No idea how to fix it!

I came to the same conclusion and I have really no idea how to fix that too. So, it is a good idea to use a grid only on needed blocks, like `article`. That being said, you can show the grid with :

```scss
main {
	@include vr-grid();
}
```

Simplify your alignments with jellybeans.js
-------------------------------------------

A good companion to vertical-rhythmic is [jellybeans](https://github.com/pyrsmk/jellybeans). It emphasizes your different blocks by setting them a random background color.

License
-------

Published under the [MIT license](http://dreamysource.mit-license.org).
