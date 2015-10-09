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
var UserPageComponent = require('./components/UserPageComponent');
var app = document.getElementById('app');

var Router = Backbone.Router.extend({
	routes: {
		'home': 'home',
		'register': 'registerLogin',
		'login': 'registerLogin',
		'blogs': 'blogs',
		'create': 'createBlog',
		'logOut': 'logOut',
		'userPage/:id': 'userPage'
	},
	home: function() {
		ReactDOM.render(
			<HomePageComponent router={r}/>,
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
			<BlogsComponent router={r}/>,
			app
			)
	},
	createBlog: function() {
		ReactDOM.render(
			<CreateBlogComponent router={r} />,
			app
			)
	},
	userPage: function(id) {
		ReactDOM.render(
			<UserPageComponent userId={id} />,
			app
			)
	},
	logOut: function() {
		Parse.User.logOut();
		this.navigate('home', {trigger: true});
	}
});

var r = new Router();
Backbone.history.start();

ReactDOM.render(
	<NavComponent router={r} />,
	document.getElementById('nav')
	);
