Vertical-rhythmic 2.0.1
=======================

I - Introduction
----------------

Vertical rhythm is a web development concept which consists in adjusting line heights, paddings, margins, across a web page to have a vertical structure for a better reading accessibility. If you are not familiar with vertical rhythm concept you can read these great articles :
- http://24ways.org/2006/compose-to-a-vertical-rhythm
- http://alistapart.com/article/more-meaningful-typography
- http://gregrickaby.com/using-the-golden-ratio-and-rems

As you may saw, manually managing rhythms is dreadfully painful. There's some tools and methods to manage vertical rhythms but most of them are pixel based and a responsive design should not be created with pixel based in mind but with adaptiveness across devices. Then, we need to use `em` or `rem` units.

Vertical-rhythmic revolves around the font size of each block of your design to keep a beautiful ratio in line heights, margins, padding, and other whitespaces.

II - Quick example
------------------

```scss
html{
	@include vr-baseline(0.9rem,1.4rem);
}

section{
	font-size: 1.2rem;
	line-height: vr(1.2rem);
}

section div{
	font-size: 1.4rem;
	line-height: vr(1.4rem);
	margin-top: vr(1.4rem,2);
	margin-bottom: vr(1.4rem,3);
	padding: vr(1.4rem,0.5);
}
```

III - Installation
------------------

You can pick up the SCSS file or install it with [Bower](http://bower.io) :

```
bower install vertical-rhythmic --save
```

IV - Basic use
--------------

To begin with vertical rhythms, you need to establish the baseline to give to vertical-rhythmic the base ratio for all calculations. The function takes your `font-size` as first argument and your `line-height` as second argument. Please note that the library is compatible with __any CSS unit__.

```scss
html{
	@include vr-baseline(0.9rem,1.4rem);
}
```

Be careful that `vr-baseline()` automatically adds `font-size` and `line-height` properties to your stylesheet, to avoid redundant declaration. Then, you can use the vertical-rhythmic core wherever you want. Each time you change your `font-size`, you will must specify a correct rhythm for all other properties :

```scss
h1{
	font-size:1.6rem;
	line-height:vr(1.6rem,1.5);
	margin:vr(1.6rem,2) 0;
}
```

Then that's all, you're good to ride!

V - REMs and PX fallback
------------------------

[Some browsers](http://caniuse.com/#feat=rem), whose Internet Explorer 7 and 8, don't support `rem`. We need a fallback with `px` unit. Vertical-rhythmic provides a `rem2px` method to simplify that fallback when using `rem` unit :

```scss
p{
	font-size: rem2px(1.2rem);
	font-size: 1.2rem;
	text-indent: rem2px(2rem);
	text-indent: 2rem;
}
```

The computing base is set to `16px`, which is the root `font-size` of all browsers. If you have set another root font size (by setting a `%` font size to `html`, per example), you can modify it with :

```scss
$vr-root-px:12px;

html{
	// 75% of 16px = 12px
	font-size:75%;
}

p{
	text-indent:rem2px(2rem);
}
```

VI - Modular scale
------------------

Vertical-rhythmic is designed to be very flexible. A good companion could be [modular-scale](https://github.com/Team-Sass/modular-scale), a modular scale calculator bringing golden ratio (and many others) to your stylesheets. The use of vertical-rhythmic is slightly different but still short and simple :

```scss
$ms-base:1rem;
$ms-ratio:$golden;

body{
	@include vr-baseline(1rem,1.4rem);
}

section{
	font-size: ms(2);
	line-height: vr(ms(2));
}

section div{
	font-size: ms(3);
	margin-top: vr(ms(3),2);
	margin-bottom: vr(ms(3),3);
	padding: vr(ms(3),0.5);
}
```

VII - License
-------------

Released under the MIT license ;)