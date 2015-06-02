Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('remote',{path:'/remote'});
	this.route('target',{path:'/target'});
});