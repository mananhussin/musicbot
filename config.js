require('dotenv').config();

module.exports = {
    "token": process.env.token,
    "prefix": process.env.prefix,
    "owners": [process.env.ownerid],
    "host": process.env.host,
    "hostpassw": process.env.hostpassw
}