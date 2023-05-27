// SLIDER FOR STATS - PLACE IN JAVASCRIPT
Macro.add('slider', {
	skipArgs	:	false,
	tags			:	['variable', 'min', 'max', 'label'],
	handler		: function() {
		var $html 	=		$('html');
		var varname =	 	this.args[0];
		var $var		=		'$' + this.args[0];
		var min 		=	 	this.args[1];
		var max			=		this.args[2];
		var stat 		=		State.getVar($var); 
		if (this.args[3] === false) {
			var label = '';
		} else {
			var label =		this.args[3] + ': ';
		};
		if (this.args.length < 4) {
			return this.error('<<slider>> macro requires 4 inputs: the relevant variable ("variable"), a minimum value, a maximum value, and a label. To only display the value number, set the label to false.');
		};
		if (typeof stat === 'undefined') {
			return this.error('The variable specified is not defined.');
		}
		var $container = $(document.createElement('div'))
			.addClass('slide-container')
			.appendTo(this.output);
		var $display = $(document.createElement('span'))
			.addClass('slider-label')
			.attr('id', varname + '-label')
			.html(label + stat)
			.appendTo($container);
		var $range = $(document.createElement('input'))
			.addClass('slider')
			.attr({
				'type'	:		'range',
				'name'	:		varname,
				'min'		:		min,
				'max'		:		max,
				'value'	:		State.getVar($var),
				'id'		:		'slider-' + varname
			})
			.appendTo($container);
			$range.on('input change', function() {
				State.setVar($var, +this.value);
				$display.html(label + this.value);
		})
	}
});
