(function(){
	"use strict";
	var app = {
		init:function(){
			// let's go
		},
	};

	$(document).ready(function(){
		app.init();

		function run(){
			var text = $('example.md').value,
			target = $('#md'),
			converter = new showdown.Converter(),
			html = converter.makeHtml(text);
			target.innerHTML = html;
	}



	});
})();
