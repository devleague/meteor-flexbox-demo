'use strict';

Meteor.startup(function () {
  // code to run on server at startup
  if(NotesCollection.find().fetch().length ===  0){
    NotesCollection.insert({
      title: "First Note",
      message: "Don't forget to delete me meow.",
      show: true,
      added: Date.now()
    });
  }
});