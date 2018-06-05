var pubJson = require('../../mocks/pubs');
import * as Pub from "../entites/pubs";
var moment = require('moment');

function listerPubs() {
  var listePub = [];
 pubJson.forEach(pub => {
  listePub.push(new Pub.Pubs(pub.name, pub.owner.firstName, pub.owner.lastName, pub.owner.mail,
    pub.openDays, pub.openHours.start, pub.openHours.end, pub.beers));
 })
  return listePub ;
}

function listerPubsOuverts() {
  var listeJourOuverts = [];
  pubJson.forEach(pub => {
    if(pub['openDays'].includes(moment().format('dddd')))
    listeJourOuverts.push((new Pub.Pubs(pub.name, pub.owner.firstName, pub.owner.lastName, pub.owner.mail,
      pub.openDays, pub.openHours.start, pub.openHours.end, pub.beers)));
  });
  return listeJourOuverts;
}

module.exports = {
  listerPubs: listerPubs,
  listerPubsOuverts: listerPubsOuverts,
};


