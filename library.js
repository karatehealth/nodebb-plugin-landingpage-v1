"use strict";

plugin = {};

plugin.load = function (params, callback) {

	var router = params.router;
	var middleware = params.middleware;

	// Define the function that renders the custom route.
	function render(req, res, next) {

		// Get whatever data you want to send to the template here.
		var data = {whatever: 25};

		// This is the path to your template without the .tpl, relative to the templates directory in plugin.json
		var template = 'landinghome'

		// Send the page to the user.
		res.render(template, data);
	}

	// This actually creates the routes, you need two routes for every page.
	// The first parameter is the actual path to your page.
	router.get('/landinghome', middleware.buildHeader, render);
	router.get('/api/landinghome', render);

	callback();
};

module.exports = plugin;