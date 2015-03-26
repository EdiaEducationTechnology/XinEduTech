/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function($) {
	'use strict';

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.BlogView = Backbone.View.extend({
		events : {},
		initialize : function(options) {
			this.options = options;
		},
		render : function() {
			_.templateSettings = {
				interpolate : /\{\{(.+?)\}\}/g
			};
			var html = $('#blogpanel-hardware-template').html();
			var template = _.template(html)
			this.$el.html(template(this.options));
			return this;
		}
	});
})(jQuery);