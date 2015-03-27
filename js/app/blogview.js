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
				document.title = $('h1', self.$el).text();
				$('.panel.twitter .text-center').html('');
				$('.panel.twitter .text-center').html('<a href="https://twitter.com/share" class="twitter-share-button" data-size="large">Tweet</a>');
				
				// $('.twitter-share-button').data('text', title);
				// $('.twitter-share-button').data('url', title);
				self.addTwitter();
				
			});
			return this;
		},
		addTwitter : function(){
			$('#twitter-wjs').remove();
			!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
			
			/*
			!function(d,s,id){
				var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
					if(!d.getElementById(id)){
						js=d.createElement(s);js.id=id;
						js.src=p+'://platform.twitter.com/widgets.js';
						fjs.parentNode.insertBefore(js,fjs);
					}
				}(document, 'script', 'twitter-wjs');
				*/
		}
	});
})(jQuery);