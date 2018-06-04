var pubs = require('../mocks/pubs');
var moment = require('moment');

function listerPubs() {
  return pubs ;
}

function listerPubsOuverts() {
  var listeJourOuverts = [];
  pubs.forEach(pub => {
    if(pub['openDays'].includes(moment().format('dddd')))
    listeJourOuverts.push(pub);
  });
  return listeJourOuverts;
}

module.exports = {
  listerPubs: listerPubs,
  listerPubsOuverts: listerPubsOuverts,
};


