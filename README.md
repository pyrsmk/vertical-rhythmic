Vertical-rhythmic 2.0.2
=======================

I encourage you to use vertical-rhythmic with [modular-scale](https://github.com/modularscale/modularscale-sass), please see chapter 5.

I - Introduction
----------------

Vertical rhythm is a web development concept which consists in adjusting line heights, paddings, margins, across a web page to have a vertical structure for a better reading accessibility. If you are not familiar with vertical rhythms you can read these great articles :

- http://24ways.org/2006/compose-to-a-vertical-rhythm
- http://alistapart.com/article/more-meaningful-typography
- http://gregrickaby.com/using-the-golden-ratio-and-rems

As you may saw, manually managing rhythms is dreadfully painful. Vertical-rhythmic revolves around the font size of each block of your design to keep a beautiful ratio in all your whitespaces.

II - Installation
-----------------

You can pick up the SCSS file or install it with [Bower](http://bower.io) :

```
bower install vertical-rhythmic --save
npm install pyrsmk/vertical-rhythmic --save
```

III - Quick example
-------------------

```scss
html {
	@include vr-baseline(0.9em, 1.4em);
}

section {
	font-size: 1.2em;
	line-height: vr(1.2em);
}

section div {
	font-size: 1.4em;
	line-height: vr(1.4em);
	margin-top: vr(1.4em, 2);
	margin-bottom: vr(1.4em, 3);
	padding: vr(1.4em, 0.5);
}
```

For a comparison of vertical-rhythmic and modular-scale use, and a live example, see this [codepen](http://codepen.io/pyrsmk/pen/PNeJgg). Read this [issue comment](https://github.com/pyrsmk/vertical-rhythmic/issues/5#issuecomment-211293872) to have some explanations of this example.

IV - Basic use
--------------

To begin with vertical rhythms, you need to establish the baseline to give to vertical-rhythmic the base ratio for all calculations. The function takes your `font-size` as first argument and your `line-height` as second argument. Please note that the library is compatible with __any CSS unit__.

```scss
html {
	@include vr-baseline(0.9em, 1.4em);
}
```

Be careful that `vr-baseline()` automatically adds `font-size` and `line-height` properties to your stylesheet, to avoid redundant declaration. Then, you can use the `vr()` core function wherever you want. Each time you change your `font-size`, you will must specify a correct rhythm for all other properties :

```scss
h1 {
	font-size: 1.6em;
	line-height: vr(1.6em, 1.5);
	margin: vr(1.6em, 2) 0;
}
```

V - With modular scale
----------------------

Vertical-rhythmic is designed to be very flexible. A good companion is the well-known [modular-scale](https://github.com/Team-Sass/modular-scale). Modular-scale won't change the use of vertical-rhythmic, you just have to modify how you need to set your baseline :

```scss
$ms-base: 1em;
$ms-ratio: $major-second;

html {
	  @include vr-baseline(ms(0), ms(1));
}
```

VI - REMs and PX fallback
-------------------------

Important : this function will be dropped in the next major release.

[Some browsers](http://caniuse.com/#feat=rem), whose Internet Explorer 7 and 8, don't support `rem`. We need a fallback with `px` unit. Vertical-rhythmic provides a `rem2px` method to simplify that fallback when using `rem` unit :

```scss
p {
	font-size: rem2px(1.2rem);
	font-size: 1.2rem;
	text-indent: rem2px(2rem);
	text-indent: 2rem;
}
```

The computing base is set to `16px`, which is the root `font-size` of all browsers. If you have set another root font size (by setting a `%` font size to `html`, per example), you can modify it with :

```scss
$vr-root-px: 12px;

html {
	// 75% of 16px = 12px
	font-size: 75%;
}

p {
	text-indent: rem2px(2rem);
}
```

VII - License
-------------

Released under the MIT license ;)
