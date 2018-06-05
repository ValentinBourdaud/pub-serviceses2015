"use strict";

var pubService = require("./services/pubs-services");

function afficherListePubs() {
    console.log(pubService.listerPubs());
}
function afficherListePubsOuverts() {

    console.log(pubService.listerPubsOuverts());
}
afficherListePubs();
module.exports = {

    afficherListePubs: afficherListePubs,
    afficherListePubsOuverts: afficherListePubsOuverts
};