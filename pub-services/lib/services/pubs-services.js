'use strict';

var _pubs = require('../entites/pubs');

var Pub = _interopRequireWildcard(_pubs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var pubJson = require('../../mocks/pubs');

var moment = require('moment');

function listerPubs() {
  var listePub = [];
  pubJson.forEach(function (pub) {
    listePub.push(new Pub.Pubs(pub.name, pub.owner.firstName, pub.owner.lastName, pub.owner.mail, pub.openDays, pub.openHours.start, pub.openHours.end, pub.beers));
  });
  return listePub;
}

function listerPubsOuverts() {
  var listeJourOuverts = [];
  pubJson.forEach(function (pub) {
    if (pub['openDays'].includes(moment().format('dddd'))) listeJourOuverts.push(new Pub.Pubs(pub.name, pub.owner.firstName, pub.owner.lastName, pub.owner.mail, pub.openDays, pub.openHours.start, pub.openHours.end, pub.beers));
  });
  return listeJourOuverts;
}

module.exports = {
  listerPubs: listerPubs,
  listerPubsOuverts: listerPubsOuverts
};