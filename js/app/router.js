var app = app || {};
$(function() {
	'use strict';

	// Todo Router
	// ----------
	var AppRouter = Backbone.Router.extend({
		routes : {
			'' : 'wizard',
			'wizard' : 'wizard',
			'blog' : 'blog',
			'blog/:type/:tech' : 'blog'
		},

		wizard : function(param) {
			$('#blogpanel').hide();
			$('#wizardpanel').show();

		},
		blog : function(type, tech) {
			$('#blogpanel').show();
			$('#wizardpanel').hide();
			var view = new app.BlogView({type:type, tech:tech});
//			view.type = type;
//			view.tech = tech;
			$('#blogpanel').html(view.render().el);
		}
	});

	// app.WizardView();
	app.AppRouter = new AppRouter();
	Backbone.history.start();
});