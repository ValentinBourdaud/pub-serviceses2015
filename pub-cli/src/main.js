var pubService = require("pub-services");

function getListPubs(){
    pubService.afficherListePubs();
}

function getListPubsOuverts(){
    (pubService.afficherListePubsOuverts();
}

module.exports = {
    getListPub: getListPubs,
    getListPubOuverts: getListPubsOuverts,
  };
  
