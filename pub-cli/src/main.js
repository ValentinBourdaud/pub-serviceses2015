var pubService = require("pub-services");

function getListPubs(){
    console.log(pubService.afficherListePubs());
}

function getListPubsOuverts(){
    console.log(pubService.afficherListePubsOuverts());
}

module.exports = {
    getListPub: getListPubs,
    getListPubOuverts: getListPubsOuverts,
  };
  
