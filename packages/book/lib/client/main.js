getAllBooks = function () {
  return Books.find({}, {sort: {statut : -1}});
};

getBookTitleById = function (id) {
  var book = Books.findOne(id);

  return (book) ? book.title : "Pas de livre";
};

Meteor.startup(function () {
  Meteor.subscribe("all_books");
});
