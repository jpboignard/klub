Template.formKM.helpers({
  klub: () => PastKlub.findOne(Session.get('formLinkIdKlub'))
})

Template.formKM.events({
  'submit form': event => {
    const idKlub = Session.get('formLinkIdKlub')
    const klubTarget = PastKlub.findOne(idKlub)

    event.preventDefault()
    klubTarget.url = $('input#linkSubmit').val()
    klubTarget.pic = $('input#picSubmit').val()
    klubTarget.summary = $('textarea#summarySubmit').val()
    klubTarget.attendees = $('input#attendeesSubmit').val().split(',')
    PastKlub.update(klubTarget._id, klubTarget)
    $('#modalKlubMaster').modal('hide')
    Session.set('formLinkIdKlub', '')
  },
  'click .modifyLink': () => {
    Session.set('formLinkIdKlub', this._id)
  }
})
