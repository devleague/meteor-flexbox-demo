if (Meteor.isClient) {
  Template.posterBoard.created = function(){

  };

  Template.posterBoard.rendered = function(){
    this.find('#message').focus();
  };

  Template.posterBoard.destroyed = function(){

  };

  Template.posterBoard.helpers({
    notes: function(){
      return NotesCollection.find().fetch();
    }
  });

  Template.posterBoard.events({
    'click #save' : function(evt, tmpl){
      //get the message from our HTML input
      var message = tmpl.find('#message').value;

      //if message is empty don't save
      if(message === ""){
        return;
      }

      //insert message into collection
      NotesCollection.insert({
        message: message,
        show: true,
        added: Date.now()
      });

      //clear input text and set cursur focus
      tmpl.find('#message').value = "";
      tmpl.find('#message').focus();
    },

    'click .delete' : function(evt, tmpl){
      NotesCollection.remove(this._id);
    }
    
  });
}