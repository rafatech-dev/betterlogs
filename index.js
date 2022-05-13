const logToFile = require("./file/app");
const moment = require("moment")

let textParse = (loc, msg) => {
    return `[${loc}] : ${msg}`
}

/**
 * Betterlog a message
 * @param {string} loc Location where the log is comming from
 * @param {string} msg Message to log
 * @param {string} file File to load to
 */
module.exports = (loc = "N/A", msg = "Message undefined.", file) => {
    if(!file) {
        if(loc === "N/A") {
            file = `default.log`;
        } else {
            file = `${loc}.log`;
        }
    }

    let date = moment().format('MMMM Do YYYY, h:mm:ss a');
    let text = `${date} -> [${loc}] : ${msg}`

    logToFile(file, text)
    console.log(text)
}

module.exports.file = logToFile;