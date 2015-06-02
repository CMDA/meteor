Meteor.methods({
    insertPosition: function (position) {
      Panels.insert({position: position});
    },

    setPosition: function (panelId, position) {
      Panels.update(panelId, { $set: { position: position} });
    },

    removeAll: function () {
      Panels.remove({});
    }
});