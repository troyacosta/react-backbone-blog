'use strict';
Parse.initialize('kkMpL68O41xvQfa9PVxYz2lNfs8Pf3ADE63mvupZ', 'EEWp0igFHSCD5ZEgg8qwu1tuTIjp93B5SEWXe9zI');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

var NavComponent = require('./components/NavComponent');
var HomePageComponent = require('./components/HomePageComponent');
var RegisterLoginComponent = require('./components/RegisterLoginComponent');
var BlogsComponent = require('./components/BlogsComponent');
var CreateBlogComponent = require('./components/CreateBlogComponent');
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
			<RegisterLoginComponent router={r}/>,
			app
			)
	},
	blogs: function() {
		ReactDOM.render(
			<BlogsComponent />,
			app
			)
	},
	createBlog: function() {
		ReactDOM.render(
			<CreateBlogComponent />,
			app
			)
	}
});

var r = new Router();
Backbone.history.start();
