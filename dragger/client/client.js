Meteor.subscribe('panels');
//Meteor.call('removeAll');
//Meteor.call('insertPosition',0);
Meteor.startup(function () {
	Session.set('target', $('.target'));
});

Template.target.helpers({
	panel: function () {
		return Panels.findOne();
	}
});

Template.remote.gestures({
	'panup .panel': function (event, template) {
	    /* Do something when user swipes left on .item .panel (elements(s) inside the template html) */
	    /* `event` is the Hammer.js event object */
	    /* `template` is the `Blaze.TemplateInstance` */
	    /* `this` is the data context of the element in your template */
	    var currentPos,
	        panel = Panels.findOne(); 

	        console.log(panel.position);
	         
	    
	    currentPos = event.deltaY * 2;
	    Meteor.call('setPosition', panel._id, currentPos);

	}, 

	'pandown .panel': function (event, template) {
	    /* Do something when user swipes left on .item .panel (elements(s) inside the template html) */
	    /* `event` is the Hammer.js event object */
	    /* `template` is the `Blaze.TemplateInstance` */
	    /* `this` is the data context of the element in your template */
	    var target = $('.target'),
	        currentPos,
	        panel = Panels.findOne();
	        
	    currentPos = event.deltaY * 2;
	    Meteor.call('setPosition', panel._id, currentPos);
	}
});

