var React = require('react');
var BlogPostModel = require('../models/BlogPostModel');
var Backbone = require('backbone');

module.exports = React.createClass({
	getInitialState: function() {
		return({
			blogs: []
		});
	},
	componentWillMount: function() {
		var query = new Parse.Query(BlogPostModel);
			query.include('user');
			query.find().then( (blogs) => {
			this.setState({blogs: blogs});
		});
	},	
	render: function() {
			var posts = this.state.blogs.map(function(blog) {
			var date = blog.get('createdAt').toString().slice(0, 15);
			var user = blog.get('user');
			var poster = user.get('firstname') + ' ' + user.get('lastname');	
			return(
				<div className="blogPostContainer row col-sm-8 col-sm-offset-2">
					<div><h1 className="blogTitle">{blog.get('title')}</h1></div>
					<div className="blog">{blog.get('blog')}</div>
					<div className="imageContainer"><img className="img-responsive" src={blog.get('image')}></img></div>
					<div><a href={"#userPage/"+user.id}>{poster}</a></div>
					<div>{date}</div>
				</div>
			)
		}).reverse();
		return(
			<section>
		 		{posts}
		 	</section>
		)
	}
});