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

				
				self.addTwitter();
				self.addImages();
				
			});
			return this;
		},
		addTwitter : function(){
			$('#twitter-wjs').remove();
			$('.panel.twitter .text-center').html('');
			$('.panel.twitter .text-center').html('<a href="https://twitter.com/share" class="twitter-share-button" data-size="large">Tweet</a>');
			!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
		},
		addImages : function(){
			var self = this;
			
			$.get('imagesearch.php?q=' + escape(self.options.tech), function(data){
				var results = data.responseData.results;
				for (var i in results) {
					var result = results[i];
					$('.blogimage:eq('+ i + ')').attr('src', result.unescapedUrl);
					$('.blogimage:eq('+ i +')').show();
					console.log('unescapedUrl: ' + result.unescapedUrl);
				}
			});
		}
	});
})(jQuery);