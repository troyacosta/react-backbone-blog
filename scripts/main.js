'use strict';
Parse.initialize('kkMpL68O41xvQfa9PVxYz2lNfs8Pf3ADE63mvupZ', 'x6yVIGt3mRIcqNNlVJBsGoeh2NtB9xA3nhtsQg9p');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

var NavComponent = require('./components/NavComponent');
var HomePageComponent = require('./components/HomePageComponent');
var RegisterLoginComponent = require('./components/RegisterLoginComponent');
var app = document.getElementById('app');

ReactDOM.render(
	<NavComponent />,
	document.getElementById('nav')
	);

var Router = Backbone.Router.extend({
	routes: {
		'home': 'home',
		'register': 'registerLogin',
		'login': 'registerLogin',
		'blogs': 'blogs',
		'create': 'createBlog'
	},
	home: function() {
		ReactDOM.render(
			<HomePageComponent />,
			app
			)
	},
	registerLogin: function() {
		ReactDOM.render(
			<RegisterLoginComponent />,
			app
			)
	},
});

var r = new Router();
Backbone.history.start();
