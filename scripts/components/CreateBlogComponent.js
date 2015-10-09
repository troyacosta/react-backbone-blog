var React = require('react');
var Backbone = require('backbone');
var BlogPostModel = require('../models/BlogPostModel');

module.exports = React.createClass({
	render: function() {
		return(
			<section>
				<h1>Create Blog Page</h1>
				<form className="newBlogForm" onSubmit={this.postBlog}>
  					<div className="form-group">
    					<label>Title</label>
    					<input type="text" className="form-control" ref="title" placeholder="title" />
  					</div>
  					<div className="form-group">
    					<label>Bitch here!</label>
    					<textarea type="password" className="form-control" ref="blog" placeholder="Start bitching"></textarea>
  					</div>
  					<div className="form-group">
    					<label>Add an image</label>
    					<input type="url" className="form-control" ref="image" placeholder="url" />
  					</div>
  					<button type="submit" className="btn btn-default">Post!</button>
				</form>
			</section>
			)
	},
	postBlog: function(e) {
		e.preventDefault();
		var blogPost = new BlogPostModel({
			title: this.refs.title.value,
			blog: this.refs.blog.value,
			user: Parse.User.current(),
			image: this.refs.image.value
		});
		blogPost.save();
		this.props.router.navigate('userPage/'+blogPost.get('user').id, {trigger: true});
	}

});