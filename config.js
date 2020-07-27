require('dotenv').config();

module.exports = {
    "token": process.env.TOKEN,
    "prefix": process.env.PREFIX0,
    "owners": [process.env.OWNERID],
    "host": process.env.HOST,
    "hostpassw": process.env.HOSTPASSW
}