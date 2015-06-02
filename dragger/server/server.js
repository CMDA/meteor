Meteor.startup(function () {
	Meteor.publish('panels', function () {
	  return Panels.find({});
	});
});