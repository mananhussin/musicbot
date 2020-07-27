const ExpressClient = require('./Structures/ExpressClient.js');
const config = require('../config');

const client = new ExpressClient(config);
client.start();