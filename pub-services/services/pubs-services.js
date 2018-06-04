var pubs = require('../mocks/pubs');

function listerPubs() {
  return pubs ;
}

function listerPubsOuverts(jour) {
  var listeJourOuverts = [];
  pubs.forEach(pub => {
    if(pub['openDays'].includes(jour))
    listeJourOuverts.push(pub);
  });
  return listeJourOuverts;
}

module.exports = {
  listerPubs: listerPubs,
  listerPubsOuverts: listerPubsOuverts,
};


