/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function($) {
	'use strict';

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.WizardView = Backbone.View.extend({
		el : '#wizardpanel',
		events : {
			'click button.submit' : 'submit'
		},
		initialize : function() {

		},
		render : function() {
			return this;
		},
		submit : function() {
			if (this.validate()) {
				var map = {};
				$(":text[name]").each(function(){
					var name = $(this).attr('name');
					var value = $(this).val();
					map[name] = value;
				});
				$(":radio[name]:checked").each(function(){
					var name = $(this).attr('name');
					var value = $(this).val();
					map[name] = value;
				});
//				var qs = '?';
//				$.each(map, function(key, value){
//					qs += key;
//					qs += '=';
//					qs += value;
//				});
				document.location = '#blog/' + map.type + '/' + map.tech;
			}
			return false;
		},
		validate : function() {
			var rv = true;
			var $form = $('form.wizard');
			$('.form-group').removeClass('has-error');
			$(':text.required', $form).each(function(){
				var val = $(this).val();
				if (!val) {
					$(this).parent().addClass('has-error');
					rv = false;
				}
			});
			
			var type = $(":radio[name='type']:checked", $form).val();
			if (!type) {
				$(":radio[name='type']", $form).parents('.form-group').addClass('has-error');
				rv = false;
			}
			/*
			var tech = $('#tech').val();
			if (!tech) {
				$('#tech').parent().addClass('has-error');
			}
			*/
			return rv;
		}
	});
})(jQuery);