var pubService = require('./services/pubs-services');

console.log(pubService.listerPubs());
console.log(pubService.listerPubsOuverts('Thursday'));

module.exports = {
    services: {
    pubService : pubService
    }
    }