// Template.bookEdit.helpers({
//   book: function () {
//     // this provided from url parameter
//     return new Library().bookById(this.toString())
//   }
// })

Template.bookEdit.events({
  'submit form': elt => {
    const _id = $('input.id').val()
    const book = new Library().bookById(_id)

    elt.preventDefault()
    book.author = $('input.author').val()
    book.type = $('input.typeItem').val()
    book.title = $('input.title').val()
    book.img = $('input.img').val()
    book.site = $('input.site').val()
    book.origin = $('input.origin').val()
    book.teaser = $('textarea#teaser').val()
    book.desc = $('textarea#desc').val()
    book.statut = $('input.statut').val()
    book.proposedAt = $('input.date').val()
    Books.update(_id, book)
    Router.go('adminBookList')
  },
  'click .freeze': elt => {
    const _id = $('input.id').val()
    const book = new Library().bookById(_id)

    elt.preventDefault()
    book.statut = 'frozen'
    Books.update(_id, book)
    Router.go('adminBookList')
  },
  'click .delete': elt => {
    const _id = $('input.id').val()

    elt.preventDefault()
    Books.remove(_id)
    Router.go('adminBookList')
  }
})
