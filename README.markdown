Vertical-rhythmic
=================

I - Introduction
----------------

In first, if you don't know what vertical rhythm is please read this [great article](http://24ways.org/2006/compose-to-a-vertical-rhythm).

Vertical-rhythm is a web development concept which consists in adjusting line heights across a web page to have a vertical structure for a better accessibility. Manually managing rhythms is dreadfully painful because you must take your calculator and adapt line heights, margins, paddings, borders, ..., by yourself. Hopefully, Compass, a great Sass framework, provides support for that stuff. But... Compass proposes px-based vertical rhythm. This behavior is a habit of many developers and designers to build identical websites across browsers and have IE6 compatible text zoom. Unfortunately, it breaks accessibility: users can't change the global font size anymore in their browser preferences. Moreover, mixins aren't developer friendly and don't support outlines at all (useful with homemade buttons).

Vertical-rhythmic tries to bring you a complete em-based tool with extreme ease of use.

II - Utilization
----------------

There's two approaches to rhythm your site: you can use both rhythm functions, which are very flexibles, or you can include the font-size, margin, padding, border or outline properties, which are more assisted. In all cases, you must set `$base-font-size` and `$base-line-height` if you don't want a based rhythm of 1em/1.5em (16px/24px in basic browsers configuration). After that, you just have to include vertical-rhythmic to your stylesheet and it initializes body rhythm for you.

III - Quick example
-------------------

Let's say we want a base font size of 0.9em and a base line height of 1.4em (many websites reduce their fonts at these sizes, it's nearly a standard, per say).

	$base-font-size:0.9em;
	$base-line-height:1.4em;
	@import "vertical-rhythmic";

So, we want a `<h1>` with a 1.5em font size. We must update its line height according to its new font size. Right now, we just want an automatic line height:

	// First approach
	h1{
		font-size:1.5em;
		line-height:rhythm(auto,1.5em);
	}

	// Second approach
	h1{
		@include font-size(1.5em);
	}

Maybe you think the second approach is more expeditive. Yes. But it depends on the context ;)

Let's go more deeply! Now we want a border and an outline around the title with 1px width. Our tool is em-based but it provides a conversion function for that, which will simplify our lives: `px-rhythm`. Oh! One last thing! Of course, we'll need a padding of 2 whitespace lines. Then, to keep our rhythm we'll must substract the borders (2px) from the padding:

	// First approach
	h1{
		font-size:1.5em;
		line-height:rhythm(auto,1.5em);
		border:black solid px-rhythm(1,1.5em);
		outline:red solid px-rhythm(1,1.5em);
		padding:rhythm(2,1.5em) - px-rhythm(2,1.5em);
	}

	// Second approach
	h1{
		@include font-size(1.5em);
		@include border(black,1.5em);
		@include outline(red,1.5em);
		@include padding(2,1.5em,2);
	}

That's all we need for that and your title is fully rhythmic.

IV - Additional notes
---------------------

Setting many levels of line-height childs increases exponentially the complexity of the rhythm calculation. Furthermore, websites generally use only one depth level. Thus, vertical-rhythmic doesn't support it. Long story short: if you want to have a `<p>` within a `<div>` within another `<div>`, and all have their own line-height, just take your calculator and enjoy.