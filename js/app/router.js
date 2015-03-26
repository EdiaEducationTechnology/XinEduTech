var app = app || {};
$(function() {
	'use strict';

	// Todo Router
	// ----------
	var AppRouter = Backbone.Router.extend({
		routes : {
			'' : 'wizard',
			'wizard' : 'wizard',
			'create' : 'wizard',
			'blog' : 'blog',
			'about' : 'about',
			'contact' : 'contact',
			'blog/:type/:tech' : 'blog'
		},

		wizard : function(param) {
			$(this).parent('li').addClass('active');
			$('.panel').hide();
			$('#wizardpanel').show();

		},
		blog : function(type, tech) {
			$('li').removeClass('active');
			$('.panel').hide();
			$('#blogpanel').show();
			var view = new app.BlogView({type:type, tech:tech});
			$('#blogpanel').html(view.render().el);
		},
		contact : function(){
			$(this).parent('li').addClass('active');
			$('.panel').hide();
			$('#contactpanel').show();
		},
		about : function(){
			$(this).parent('li').addClass('active');
			$('.panel').hide();
			$('#aboutpanel').show();
		}
	});

	// app.WizardView();
	app.AppRouter = new AppRouter();
	Backbone.history.start();
});