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
			var self = this;
			var $div = $('<div>').load('templates/blogtemplate-'+this.options.type+'.html', function(data){
				var html = $(this).html();
				var template = _.template(html)
				self.$el.html(template(self.options));
			});
			return this;
		}
	});
})(jQuery);