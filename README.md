# Slider-macro-for-SC
A custom macro for SugarCube.
Copy + paste the .css and .js files into your Story Stylesheet and Story Javascript, respectively.
To use, apply this syntax:

`<<slider "variable name (same as in storyinit)" 0 (minimum slider value) 100 (maximum slider value) "label that's displayed by the macro">><</slider>>`

The macro requires 4 arguments: the variable name, the minimum possible value, the maximum possible value, and the label. The label can be left out by entering 'false' as a value, but it is still required.

Examples:

```<<slider "age" 18 40 "Age">><</slider>>```

```<<slider "reckless" 0 100 false>><</slider>>```

Edit the appearance of the sliders with the `input[type="range"]` rule in your css.
